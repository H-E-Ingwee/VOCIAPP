'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  interest: string;
  motivation: string;
}

export default function JoinForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'applications'), {
        ...data,
        submittedAt: new Date(),
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-voci-red">Application Submitted!</h3>
        <p>Thank you for applying to VOCI. We'll be in touch soon.</p>
        <button
          className="btn btn-voci-blue"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="membership-form-wrapper bg-white p-5 rounded-3 shadow-lg max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label fw-bold">
            Full Name <span className="text-voci-red">*</span>
          </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="fullName"
            placeholder="Your Full Name"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email Address <span className="text-voci-red">*</span>
          </label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            placeholder="your.email@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
            })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
          <input
            type="tel"
            className="form-control rounded-pill"
            id="phone"
            placeholder="+254 7XX XXX XXX"
            {...register('phone')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="institution" className="form-label fw-bold">Institution/Organization</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="institution"
            placeholder="University, Company, etc."
            {...register('institution')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="interest" className="form-label fw-bold">
            Primary Area of Interest <span className="text-voci-red">*</span>
          </label>
          <select
            className="form-control rounded-pill"
            id="interest"
            {...register('interest', { required: 'Please select an area of interest' })}
          >
            <option value="">Select...</option>
            <option value="communication">Effective Communication</option>
            <option value="branding">Personal Branding</option>
            <option value="leadership">Principled Leadership</option>
          </select>
          {errors.interest && <p className="text-danger">{errors.interest.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="motivation" className="form-label fw-bold">
            Why do you want to join VOCI? <span className="text-voci-red">*</span>
          </label>
          <textarea
            className="form-control"
            id="motivation"
            rows={4}
            placeholder="Tell us about your motivation..."
            {...register('motivation', { required: 'Motivation is required' })}
          />
          {errors.motivation && <p className="text-danger">{errors.motivation.message}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-voci-red text-white w-100 rounded-pill"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}