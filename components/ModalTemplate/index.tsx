import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../../types";
import styles from "./index.module.scss";

const ModalTemplate: FC<Modal> = ({ open, setOpen, children }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.body;
  }, []);

  const close = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) setOpen(false);
  };

  return ref.current && open
    ? createPortal(
        <section className={styles.container} onClick={close}>
          {children}
        </section>,
        ref.current
      )
    : null;
};

export default ModalTemplate;
