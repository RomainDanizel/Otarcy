import React, { useContext, useRef, useState} from "react";
import { UserContext } from "./service/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { modalState, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const creds = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      setValidation("");
      navigate("/dashboard");
    } catch {
      setValidation("Wopsy, email and/or password incorrect")
    }
  };


  return (
    <>
      {modalState && (
        <div >
          <div
            style={{ minWidth: "400px" }}
          >
            <div style={{display:'flex', flexDirection:'column'}}>
              <div>
                <h1>Se connecter</h1>
              </div>

              <div>
                <form
                  ref={formRef}
                  onSubmit={handleForm}
                  style={{margin:'10px'}}
                >
                  <div>
                    <label htmlFor="signInEmail" >
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="email"
                      id="signInEmail"
                      style={{width:'300px'}}
                    />
                  </div>

                  <div>
                    <label htmlFor="signInPwd" >
                      
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      id="signInPwd"
                      style={{width:'300px'}}
                    />
                    <p>{validation}</p>
                  </div>

                  <button style={{width: '270px', backgroundColor:'#33A847', margin:'2px'}}>Connexion</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}