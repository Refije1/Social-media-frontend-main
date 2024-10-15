import React from "react";
import LikeButton from "../LikeButton";
import button from "../Button.module.css";
import classes from "./PostActions.module.css";

const PostActions = ({ post }) => {
  return (
    <div className={classes.PostActions}>
      <LikeButton post={post} />
      <div className={`${button.comment} ${button.postPosition}`}>
        <div className={button.innerContent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M11.816 8.22266C11.3648 8.22266 11.0152 8.57227 11.0152 9.00391C11.0152 9.43555 11.3648 9.78516 11.816 9.78516C12.2281 9.78516 12.5777 9.43555 12.5777 9.00391C12.5777 8.57227 12.2281 8.22266 11.816 8.22266ZM6.34723 8.22266C5.89606 8.22266 5.54645 8.57227 5.54645 9.00391C5.54645 9.43555 5.89606 9.78516 6.34723 9.78516C6.75934 9.78516 7.10895 9.43555 7.10895 9.00391C7.10895 8.57227 6.75934 8.22266 6.34723 8.22266Z"
              fill="black"
            />
            <path
              d="M18.0855 6.73828C17.1461 5.44922 15.8336 4.58789 14.3941 4.19921V4.20117C14.0601 3.83007 13.6832 3.48828 13.2613 3.18359C10.064 0.859371 5.57574 1.56836 3.24176 4.76562C1.3609 7.36328 1.44098 10.8574 3.35895 13.3398L3.37457 15.9297C3.37457 15.9922 3.38434 16.0547 3.40387 16.1133C3.50738 16.4434 3.85895 16.625 4.18707 16.5215L6.65973 15.7422C7.31402 15.9746 7.98981 16.1074 8.66168 16.1445L8.65191 16.1523C10.3921 17.4199 12.6734 17.8008 14.7652 17.1094L17.2476 17.918C17.3101 17.9375 17.3746 17.9492 17.441 17.9492C17.7867 17.9492 18.066 17.6699 18.066 17.3242V14.707C19.7867 12.3711 19.8316 9.14257 18.0855 6.73828ZM6.93317 14.3555L6.69879 14.2578L4.7652 14.8633L4.74566 12.832L4.58941 12.6562C2.93707 10.6406 2.8277 7.73632 4.37457 5.60547C6.25738 3.02343 9.86676 2.45312 12.441 4.3164C15.023 6.19336 15.5953 9.79687 13.73 12.3633C12.1656 14.5098 9.36481 15.3027 6.93317 14.3555ZM16.7964 14.0234L16.6402 14.2187L16.6597 16.25L14.7457 15.6055L14.5113 15.7031C13.4175 16.1094 12.2515 16.1426 11.1714 15.8398L11.1675 15.8379C12.6109 15.3945 13.9195 14.4961 14.8629 13.2031C16.355 11.1465 16.5972 8.5625 15.73 6.35937L15.7418 6.36718C16.191 6.68945 16.6031 7.09179 16.9527 7.57812C18.3707 9.52343 18.2906 12.1719 16.7964 14.0234Z"
              fill="black"
            />
            <path
              d="M9.0816 8.22266C8.63043 8.22266 8.28082 8.57227 8.28082 9.00391C8.28082 9.43555 8.63043 9.78516 9.0816 9.78516C9.49371 9.78516 9.84332 9.43555 9.84332 9.00391C9.84332 8.57227 9.49371 8.22266 9.0816 8.22266Z"
              fill="black"
            />
          </svg>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
};

export default PostActions;
