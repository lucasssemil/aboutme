import "./style.css";

export const TopBar: React.FC = () => {
  return (
    <div className="sm:w-screen">
      <div className="div-topBar ">
        <div className="px-5">About Me</div>
        <div className="px-5">Tech</div>
        <div className="px-5">Likes</div>
      </div>
    </div>
  );
};
