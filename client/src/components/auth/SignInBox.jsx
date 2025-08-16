import { Link } from "react-router-dom";
import { emailIcon, googleIcon } from "../assets/icons";

const SIGNIN_OPTIONS = [
  {
    id: 1,
    title: "with Google",
    handler: "Google",
    image: googleIcon,
  },
  {
    id: 2,
    title: "with email",
    handler: "mail",
    image: emailIcon,
  },
];

export default function SignInBox({ message, typeOfLogin }) {
  function handleGoogleAuth() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URL,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };
    const qs = new URLSearchParams(options);
    window.location.assign(`${rootUrl}?${qs.toString()}`);
  }

  function handleEmailLogin() {}

  return (
    <div className="w-[650px] flex flex-col items-center gap-4 py-[8vh] shadow-[2px_2px_12px_rgb(190,190,190),-20px_-20px_60px_rgb(255,255,255)]">
      <p className="font-['Roboto Slab'] text-[28px] mb-[30px]">{message}</p>

      {SIGNIN_OPTIONS.map((item) => (
        <ButtonLoginWith
          key={item.id}
          image={item.image}
          onClick={
            item.handler === "Google" ? handleGoogleAuth : handleEmailLogin
          }
          text={typeOfLogin + " " + item.title}
        />
      ))}

      {typeOfLogin === "Sign in" ? (
        <p className="mt-[22px] text-[#5c5c5c]">
          No account?{" "}
          <Link
            to="/signin/new"
            className="text-[#1a8917] no-underline font-bold text-[14px]"
          >
            Create one
          </Link>
        </p>
      ) : (
        <p className="mt-[22px] text-[#5c5c5c]">
          Already have an account?{" "}
          <Link
            to="/signin/in"
            className="text-[#1a8917] no-underline font-bold text-[14px]"
          >
            Sign in
          </Link>
        </p>
      )}

      <p className="text-[13px] text-gray-500 w-[78%] text-center leading-[22px] mt-[22px]">
        Click “{typeOfLogin}” to agree to Medium’s Terms of Service and
        acknowledge that Medium’s Privacy Policy applies to you.
      </p>
    </div>
  );
}

function ButtonLoginWith({ image, onClick, text }) {
  return (
    <button
      className="bg-transparent flex flex-row items-center px-[14px] py-[6px] rounded-[18px] w-[200px] border border-[#c9c9c9] gap-[12px] cursor-pointer text-[#5c5c5c]"
      onClick={onClick}
    >
      {image}
      {text}
    </button>
  );
}
