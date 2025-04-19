import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './UserForm.css';
import ServiceSelect from './serviceSelect';


function UserForm() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const openModal = () => {
        setShowModal(true);
        setSubmitSuccess(false);
    };

    const closeModal = () => {
        setShowModal(false);
        reset(); // Reset form on close
    };

    const onSubmit = async (formData) => {
        if (!selectedService) {
            return alert("Please select a service.");
        }

        const payload = {
            ...formData,
            service: selectedService.value,
        };

        try {
            const response = await axios.post('https://formspree.io/f/xyzeqnro', payload, {
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.data.ok || response.data.success) {
                setSubmitSuccess(true);
                reset();
                setSelectedService(null);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };


    return (
        <>
            {/* Get Started Button */}
            <button
                type="button"
                className="btn genericButtons btn-lg rounded-pill mt-2 fs-6 fw-normal px-4 mb-4"
                onClick={openModal}
            >
                Get Started <i className="bi bi-chevron-right" style={{ fontSize: '0.9rem' }}></i>
            </button>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal fade show custom-modal"
                    id="contactModal"
                    tabIndex="-1"
                    aria-labelledby="contactModalLabel"
                    aria-hidden="true"
                    style={{ display: 'block' }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header  border-0 bg-white text-white">

                                <button
                                    type="button"
                                    className="btn-close mt-1 me-1"
                                    onClick={closeModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body px-4 px-md-5   mb-4 mt-1 py-0">
                                {submitSuccess ? (

                                    <p className="secondMainColor text-center fs-3 "> We’ll get back to you shortly. <br /> Thanks! </p>
                                ) : (<div>
                                    <h2 className='text-center'>Let’s Get Started!</h2>
                                    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ fontSize: "0.9rem" }}>
                                        {/* Name */}
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label para mt-4">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control "
                                                {...register('name', { required: 'Full name is required' })}
                                            />
                                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label mt-3 para">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: 'Invalid email address',
                                                    },
                                                })}
                                            />
                                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                        </div>

                                        {/* Phone */}
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label mt-3 para">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control"
                                                placeholder="10-digit number"
                                                {...register('phone', {
                                                    required: 'Phone number is required',
                                                    pattern: {
                                                        value: /^\d{10}$/,
                                                        message: 'Must be a 10-digit number',
                                                    },
                                                })}
                                            />
                                            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                        </div>

                                        {/* Service */}
                                        {/* Service */}
                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label mt-3 para">
                                                Select a Service
                                            </label>
                                            <ServiceSelect
                                                value={selectedService}
                                                onChange={(option) => setSelectedService(option)}
                                            />
                                            {!selectedService && errors.service && (
                                                <p className="text-danger">{errors.service.message}</p>
                                            )}
                                        </div>


                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-secondary  rounded-pill genericButtons w-100 mt-3 mb-2" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserForm;
