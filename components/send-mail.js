import React, { useState } from "react";

export default function sendMail({}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: firstName+" "+lastName,
        phone: phone,
        subject: "Demande "+firstName+" "+lastName,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error, "error");
      return;
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  }
  };

  return (
    <div id="contact_section" className="color-bg-gris pt-10">
    <span className="sm:text-5xl text-4xl font-extrabold text-gray-100 text-center ">Nous Contactez</span>
      <form className="max-w-2xl mx-auto px-10  md:rounded-2xl ">
      
        <div className="flex flex-wrap my-5 mt-10">
          <div className="md:w-1/2 w-full md:pr-2 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value) } 
              placeHolder="Jane"
            ></input>
          </div>

          <div className="w-full md:w-1/2 md:pl-2">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value) } 
              placeHolder="Doe"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-mail"
              
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              value={email}
              placeHolder="nom@gmail.com"
              onChange={(e) => setEmail(e.target.value) }
            ></input>

            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-mail"
            >
              Numéro de téléphone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setPhone(e.target.value) }
              value={phone}
              placeHolder="+32 488 XXX XXX"
              type="text"
            ></input>
            <p className="text-gray-400 text-xs italic">
              Ces informations sont importantes pour qu&lsquo;on puisse vous recontacter.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="w-full mx-auto">
            <button
              className="w-full shadow bg-yellow-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-gray-800 font-bold py-2 rounded mb-10"
              type="button"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
          </div>
          <div className=""></div>
        </div>

      </form>

      <style jsx>{``}</style>
    </div>
  );
}
