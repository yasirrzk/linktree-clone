import grabUsername from "@/actions/grabUsername";
import { useFormState } from "react-dom";

export default function UsernameFormResult() {
    return (
    <div className="bg-red-500 border border-red-500 p-2 mb-2 text-center">
      Taken Username
    </div>
  );
}
