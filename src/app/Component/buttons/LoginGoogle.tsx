'use client';
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Logingoogle() {
    return (
        <button
        onClick={() => {}}
        className="bg-white shadow  text-center w-full py-4 flex gap-3 items-center justify-center">
         <FontAwesomeIcon icon={faGoogle} className="h-6" />
         <span>Sign in with google</span>
       </button>
    )
}