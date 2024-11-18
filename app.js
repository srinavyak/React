const heading = React.createElement("h1", {"id":"h1id",name:"h1name"}, "hello world from react");
console.log(heading) //returns object i.e react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method converting this obj(heading) to h1 tag and put it at there

// created nested elements
const parent= React.createElement("div",{id:"Parent"},
    [React.createElement("div",{id:"Child"},
        [React.createElement("h1",{id:"h1tag"},"Iam on H1 Tag"),React.createElement("h2",{id:"h2tag"},"Iam on H2 Tag")]),React.createElement("div",{id:"Child2"},
            [React.createElement("h1",{id:"h1tag"},"Iam on H1 Tag"),React.createElement("h2",{id:"h2tag"},"Iam on H2 Tag")])])

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent); 