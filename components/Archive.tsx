import { useState } from "react";
import ArchiveCard from "./ArchiveCard";


const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Todo-list App"
          des=" he to-do list app allows users to manage their tasks efficiently. 
              Users can create, read, update, and delete tasks, ensuring they stay organized
               and on track."
          listItem={["MongoDB", "Expressjs", "Reactjs", "Nodejs"]}
          link="https://tadsu-todo.onrender.com/tadsu-todo.onrender.com
"
        />
        <ArchiveCard
          title="Rentria"
          des=" a seamless and user-friendly interface that helps users find, list, and manage rental properties."
          


          listItem={["Figma"]}
          link="https://www.figma.com/design/SpuBczmFzNaGDtkDx45Kmg/rentria-(Copy)?node-id=65-67&node-type=canvas&t=gVC6thuvI9Y15oib-0"
        />
        <ArchiveCard
          title="Ride Swift"
          des="The Ride Swift app is a conceptual ride-sharing application designed to connect riders with drivers seamlessly. 
           It provides a comprehensive solution for urban transportation needs. 
          "
          listItem={["Figma"]}
          link="https://www.figma.com/design/SpuBczmFzNaGDtkDx45Kmg/rentria-(Copy)?node-id=65-67&node-type=canvas&t=gVC6thuvI9Y15oib-0"
        />

    

       

      </div>
     
    </div>
  );
};

export default Archive;
