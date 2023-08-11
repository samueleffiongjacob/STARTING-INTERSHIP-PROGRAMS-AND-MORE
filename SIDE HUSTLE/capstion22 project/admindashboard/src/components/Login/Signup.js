import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './signup.css'
// import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
function Signup() {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        country: "",
        address: "",
        email: "",
        phoneNumber: ""
    });


    useEffect(() => {
        if (
            form.name !== "" &&
            form.country !== "" &&
            form.address !== "" &&
            form.email !== "" &&
            form.phoneNumber !== ""

        ) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [form])



    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({ ...form }))

        window.location = "/"
    }



    return (
        <div className="auth_signup">
            {/* <ToastContainer /> */}

            <div className="guard-up">
                <h1> Sign Up</h1>
                <form onSubmit={submitHandler}  >

                    <input type="text" placeholder=" Name" name="name" onChange={handleChange} />

                    <input type="text" placeholder=" Country" name="country" onChange={handleChange} />

                    <input type="text" required placeholder="Address" name="address" onChange={handleChange} />

                    <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />

                    <input type="text" required placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />

                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                        <input type="checkbox" style={{ width: "25px", margin: "-7px 7px 0 0" }} id="readTerms" />
                        <p >I have read, and I agree to the terms and conditions</p>
                    </div>

                    <button
                        className={formValid ? "auth_signup-active" : "auth_signup-submit"}
                    // type="submit"
                    // id="actionBtn"
                    // disabled={!formValid}
                    >
                        Sign Up
                    </button>


                    <div className="ask"  >
                        <div className="mid"><p> Already have an account?

                            <Link className="already" to="/Signin"> <button className="Button2"> Sign In</button> </Link></p></div>

                        <div className="mid"> <p>  New to our services? Check

                            <Link className="already" to="/Home"> <button className="Button2"> Home</button> </Link> for more information
                        </p></div>


                    </div>




                </form>
            </div>

        </div>
    )
}

export default Signup;