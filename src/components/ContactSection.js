import React, { useEffect, useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {
    FormErrorMessage,
    FormControl,
} from "@chakra-ui/react";
const confirm = document.querySelectorAll('.confirmation');

function ContactSection() {
    const [result, setResult] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    function sendEmail(object) {
        emailjs.send("service_nsbms3q", "template_ut2l2ug", object, "ohG4PmJ3kGUbs2jV6")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            comment: "",
        },
        onSubmit: (values, actions) => {
            setTimeout(() => {
                sendEmail(values)
                actions.setSubmitting(false)
            }, 1000)
            formik.resetForm();
            setResult(true)
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),
    });
    setTimeout(() => {
        setResult(false)
    }, 15000)
    return (
        <div className='contact' data-aos="zoom-in" id='contact-section'>
            <h2><span className='gold'>Get in</span> touch</h2>
            <div className='contact-section'>
                <h1>Let's build something<br /> <span className='gold'>great</span> together!</h1>
                <form class="form" onSubmit={formik.handleSubmit}>
                    <div className='content'>
                    <div class="title">Contact me</div>
                    <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                        <input type="text" placeholder="Your name*" class="input" id='name' name='name'
                            {...formik.getFieldProps("name")} />
                        <FormErrorMessage className='errorMessage'>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <input type="email" placeholder="Your email*" class="input" id='email' name='email'
                            {...formik.getFieldProps("email")} />
                        <FormErrorMessage className='errorMessage'>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                        <textarea placeholder="Your message*" id='comment' name='comment'
                            {...formik.getFieldProps("comment")}></textarea>
                        <FormErrorMessage className='errorMessage'>{formik.errors.comment}</FormErrorMessage>
                    </FormControl>
                    <button>Submit</button>
                    </div>
                    {result ? <p className='confirmation'>Thank you, I will get in touch soon!</p> : null}
                </form>
            </div>
        </div>
    )
}

export default ContactSection
