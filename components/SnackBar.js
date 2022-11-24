import { useEffect, useState } from "react";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <h3>{text}</h3> : null;
}
