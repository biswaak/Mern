import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import UserForm from "../component/UserForm.css"

export default function UserFormComponent() {
    return (
        <div className="FrmBody">
            
            <Formik
                initialValues={{
                    id:"",
                    Name: "",
                    Email: "",
                    Age: 0,
                    DOB: "",
                }}
                validationSchema={yup.object({
                    id: yup.number() .required("id Requires") .positive("id must be positive number") .integer("id must be number") ,
                    Name: yup.string().required("Name required").min(4, "Name too short").max(30, "Name too long"),
                    Email: yup.string().required("Email-@gmail.com Required").email("is not valid email type").test('is-gmail', 'Only @gmail.com addresses are allowed', (value) => {
                        return value.endsWith('@gmail.com');
                    }),
                    Age: yup.number().required("Age is Required").positive("Age must be a positive number").integer("Age must be an integer"),
                    DOB: yup.date().required("Date of Birth Required")
                })}
                onSubmit={(values) => {
                    console.log(values);
                    axios.post("http://localhost:8080/setuser",values);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="Frm">
                    <div className="swapper">
                        <dl>
                            <dt className="text-white">id <span className="bi bi-star-fill text-white"></span></dt>
                            <dd>
                                <Field type="number" name="id" className="cs-Filed text-white"/>
                            </dd>

                            <dt className="text-white">Name <span className="bi bi-star-fill text-white"></span></dt>
                            <dd>
                                <Field type="text" name="Name" className="cs-Filed text-white" placeholder="Name required"/><span className="bi bi-person text-white"></span>
                            </dd>
                            <dd className="text-danger text-center"><ErrorMessage name="Name" /></dd>

                            <dt  className="text-white">Email <span className="bi bi-star-fill text-white"></span></dt>
                            <dd>
                                <Field type="email" name="Email" className="cs-Filed text-white" placeholder="ex. name@gmail.com" /> <span className="bi bi-envelope-at text-white"></span>
                            </dd>
                            <dd className="text-danger text-center"><ErrorMessage name="Email" /></dd>
                            
                            <dt className="text-white">Age <span className="bi bi-star-fill text-white"></span></dt>
                            <dd className="input-box">
                                <Field type="number" name="Age" className="cs-Filed text-white"/>
                            </dd>
                            <dd className="text-danger text-center"><ErrorMessage name="Age" /></dd>
                            
                            <dt className="text-white">DOB <span className="bi bi-star-fill text-white"></span></dt>
                            <dd className="input-dob">
                                <Field type="date" name="DOB" className="cs-Filed text-white"/>
                            </dd>
                            <dd className="text-danger text-center"><ErrorMessage name="DOB" /></dd>
                        </dl>
                        <button  className="btn btn-outline-danger" type="submit">SUBMIT</button>
                    </div>
                    
                    <hr />
                    
                </Form>
            </Formik>           
        </div>
    );
}
