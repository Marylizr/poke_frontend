
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 30%;
   height:auto;
   align-content: center;
   color: teal;
   flex-wrap: nowrap;
   margin-top:250px;
`;

const LoadingPage = () => {

   return(

      <div className="sweet-loading">

         <DotLoader loading={true} css={override} size={150}/>

      </div>
   )

}

export default LoadingPage;