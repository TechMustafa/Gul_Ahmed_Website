import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx"; // Importing the close icon from react-icons
import { Button } from "./Button";

const SelectModal = ({ isOpen, closeModal, save }) => {
    const [opacity, setOpacity] = useState(0);
    const [btnValue, setBtnValue] = useState();
    const [isWidth, setWidth] = useState(0);
    const [isDisplay, setDisplay] = useState("none");
    const [isHeight, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setDisplay("flex");
                setHeight("40%");
                setOpacity(1);
                setWidth("36%");
            }, 200);

            return () => clearTimeout(timer);
        } else {
            setOpacity(0);
            const timer = setTimeout(() => {
                setDisplay("none");
                setHeight(0);
                setWidth(0);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const modalStyle = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            transition: "all 0.3s ease", 
        },
        content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            opacity: opacity,
            transition: "all 0.2s ease",
            width: isWidth,
            height: isHeight,
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            color: "black",
            display: isDisplay,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
        },
    };

    const modalContentStyle = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
        },
        closeButton: {
            position: "absolute",
            right: "18px",
            top: "18px",
            borderRadius: "20px",
            width: "30px",
            height: "30px",
            backgroundColor: "#E7E6E8",
            padding: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            cursor: "pointer",
        },
        normalBtn: {
            borderRadius: "10px",
            width: "16vh",
            height: "40px",
            backgroundColor: "#E7E6E8",
            cursor: "pointer",
            marginRight: '3px'
        },
        icon: {
            fontSize: "20px",
            color: "black",
        },
    };

    const close = () => {
        closeModal(false);
    };

    const handleBtn = (value) => {
        setBtnValue(value);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            ariaHideApp={false}
            style={modalStyle}
            className="reviewModal border border-black"
        >
            {/* <div style={modalContentStyle.container}> */}
            <h1 className="text-[25px] font-bold">Select Week</h1>
            <div className="flex items-center my-10 justify-center rounded-[10px]">
                <Button classes={ btnValue == 1 && "border-[#004370] border-2"} text="Week 1" handleClick={()=>handleBtn(1)} btnStyle={modalContentStyle.normalBtn} />
                <Button classes={ btnValue == 2 && "border-[#004370] border-2"} text="Week 2" handleClick={()=>handleBtn(2)} btnStyle={modalContentStyle.normalBtn} />
                <Button classes={ btnValue == 3 && "border-[#004370] border-2"} text="Week 3" handleClick={()=>handleBtn(3)} btnStyle={modalContentStyle.normalBtn} />
                <Button classes={ btnValue == 4 && "border-[#004370] border-2"} text="Week 4" handleClick={()=>handleBtn(4)} btnStyle={modalContentStyle.normalBtn} />
            </div>
            <Button handleClick={() => save(btnValue)} classes="rounded-[5px] w-[25vh] h-[40px] text-white bg-[#004370] cursor-pointer mr-[3px]"
             text="Save"/>
        </Modal>
    );
};

export default SelectModal;
