import { useLoaderOrToast } from "../../context";
import styles from "./toast.module.css";

export const Toast = ({ type, text }) => {
    const { setToastMessage } = useLoaderOrToast();
    setTimeout(() => {
        setToastMessage({
            text: "",
            type: "",
        });
    }, 2500);

    return (
        <div className={`${styles["treeTv-toast"]} toast-left-${type}`}>
            <p className={`${styles["toast-text"]}`}>{text}</p>
        </div>
    );
};
