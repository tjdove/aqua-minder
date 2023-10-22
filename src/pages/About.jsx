import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("Mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="home">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
        ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
        doloribus!
      </p>
      <p>
        Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum
        vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
      </p>
      <p>
        Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae
        tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!
      </p>
      <p>
        Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident
        delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel
        odio?
      </p>
      <button onClick={() => setUser(null)}> logout</button>
    </div>
  );
}
