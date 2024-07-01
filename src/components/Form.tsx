import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef,useEffect } from "react";


const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const { register, handleSubmit,reset ,formState,formState: { isSubmitSuccessful },} = useForm();
  const onSubmit = (data: any) => {
    
    emailjs
      .sendForm('service_6fhpten', 'template_g8z3tj6', form.current as any ,{
        publicKey: '8GPisimVn76BaWPsS',
      })
      .then(
        () => {
          console.log('SUCCESS!',data);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    alert("Your message has been sent successfully. We will contact you soon.");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({name: "", email: "", country: "", phone: "", people: "", date: "", message: ""})
    }
  }, [formState, isSubmitSuccessful, reset])
  

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true, maxLength: 30 })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true, maxLength: 30 })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    {...register("country", { required: true, maxLength: 30 })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    {...register("phone", { required: true, maxLength: 15 })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600">
                    Number of Guests
                  </label>
                  <input
                    type="Number"
                    {...register("people", { required: true, min: 1 })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Date Preference
                  </label>
                  <input
                    type="date"
                    {...register("date", { required: true, maxLength: 30, valueAsDate: true })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            
                
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <input type="submit" value={"Submit"}>
                  </input>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
  }


export default Form