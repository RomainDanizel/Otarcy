import React, { useContext, useRef, useState } from "react";
import { UserContext } from "./service/userContext";
import {useNavigate} from "react-router-dom"

export default function SignUpModal() {
  
  const { modalState,  signUp } = useContext(UserContext);

  const navigate = useNavigate();

  
  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      console.log(inputs.current.value)
      inputs.current.push(el)
    }
  }  
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match")
      return;
    }

    try {

      const credentials = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
       formRef.current.reset();
      setValidation("")
      navigate("/dashboard")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }
      
      if(err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }
 
    }

  }

 

  return (
    <>
      {modalState && (
        <div>
          <div>
          </div>
            <div
              style={{ minWidth: "400px" }}
            >
              
                <div>
                  <div>
                    <h1>Inscription</h1>
                  </div>

                  <div>
                    <form 
                    ref={formRef}
                    onSubmit={handleForm}
                    >
                      <div>
                        <label htmlFor="signUpEmail" >
                          
                        </label>
                        <input
                          ref={addInputs}
                          name="email"
                          required
                          type="email"
                          
                          id="signUpEmail"
                          style={{width:'300px'}}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="signUpPwd">
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          
                          id="signUpPwd"
                          style={{width:'300px'}}
                        />
                      </div>

                      <div>
                        <label htmlFor="repeatPwd" >
                          Confirmation mdp
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          
                          id="repeatPwd"
                          style={{width:'300px'}}
                        />
                        <p >{validation}</p>
                      </div>

                      <button style={{width: '270px', backgroundColor:'#33A847', margin:'2px' }}>Suivant</button>
                    </form>
                  </div>
                </div>
              
            </div>

        </div>
      )}
    </>
  );
}