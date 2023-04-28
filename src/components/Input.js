import React, { useState } from "react";
import "./styles/Input.css";
import EmojiPicker from "emoji-picker-react";
import Button from "./Button";
import { useDispatch } from "react-redux";

function Input({
  onChangeDo,
  maxLength,
  onKeyDownDo,
  autoFocusActive,
  placeHolderText,
  type,
}) {
  const [emojiShown, setEmojiShown] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function showHideEmoji() {
    if (emojiShown === true) {
      setEmojiShown(false);
    } else {
      setEmojiShown(true);
    }
  }

  function emojiClicked(emojiData) {
    onChangeDo(value + emojiData.emoji);
  }

  return (
    <div className="inputBoxOuter">
      <div className="inputBox">
        <input
          type={type}
          placeholder={placeHolderText}
          autoFocus={autoFocusActive}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              setValue("");
              dispatch(onKeyDownDo(value));
            }
          }}
          maxLength={maxLength}
          className="todoInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type={"emoji"} onClickDo={showHideEmoji} />
      </div>
      {emojiShown ? (
        <div className="onTop">
          <EmojiPicker onEmojiClick={emojiClicked} />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
