// hooks
import { useState, useId, useRef } from "react";
// check
interface Props {
  img: string;
  name: string;
  content: string;
}

export default function Card({ img, name, content }: Props) {
  // toggle window
  let [activate, setActivate] = useState(false);
  // enable input to edit
  let [edit, setEdit] = useState(false);
  // name of the characters
  let [character, setCharacter] = useState(name);
  // info of the characters
  let [info, setInfo] = useState(content);
  //
  let inputNameRef: any = useRef("");
  let cardId = useId();
  let textareaId = useId();
  // toggle classes
  let show;
  if (activate) {
    show = "w-[40rem] justify-between";
  } else {
    show = "w-[20rem] justify-center";
  }

  return (
    <>
      <div
        id={cardId}
        className={`${show} mb-[3rem] border-2 border-red-500 duration-300 p-[1rem] rounded-xl flex `}
      >
        <img
          src={img}
          alt="image"
          className="border-2 border-black h-[20rem] w-[15rem] rounded-xl "
          onClick={() => {
            setActivate(!activate);
          }}
        />
        {activate && (
          <div className="info w-[53%] flex flex-col justify-around ">
            <h3 className="text-[2rem] capitalize">
              {edit ? (
                <textarea
                  ref={inputNameRef}
                  className="inputName h-[4rem] resize-none overflow-hidden"
                  onChange={() => {
                    setCharacter((character = inputNameRef.current.value));
                  }}
                >
                  {character}
                </textarea>
              ) : (
                character
              )}
              <hr className="h-1 bg-red-500 w-[80%] mt-2" />
            </h3>
            <p className="text-[1.3rem]">
              {edit ? (
                <textarea
                  id={textareaId}
                  onChange={() => {
                    let textArea = document.getElementById(
                      textareaId
                    ) as HTMLTextAreaElement;
                    setInfo((info = textArea?.value));
                  }}
                  className="h-[8rem] border-2 border-black w-[100%] overflow-hidden resize-none"
                >
                  {info}
                </textarea>
              ) : (
                info
              )}
            </p>
            <div className="flex justify-between w-[86%]">
              <button
                className="btn bg-red-500 "
                onClick={() => {
                  let selectedCard = document.getElementById(cardId);
                  selectedCard?.remove();
                }}
              >
                Delete
              </button>
              <button
                className="btn bg-blue-600 "
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
