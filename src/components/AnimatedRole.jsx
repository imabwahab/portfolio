import { useEffect, useState } from "react";


const AnimatedRole = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const speed = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return <span>{text}|</span>;
};

export default AnimatedRole;