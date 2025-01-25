import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import AlbumTab from "./tabPages/album";
import PostTab from "./tabPages/post";
import TodosTab from "./tabPages/todos";

const tabList = [
  {
    name: "Post",
    val: "post",
    content: <PostTab />,
  },

  {
    name: "Album",
    val: "album",
    content: <AlbumTab />,
  },

  {
    name: "Todos",
    val: "todos",
    content: <TodosTab />,
  },
];

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-10">
      <h1 className="text-emerald-400 text-4xl text-center">
        JSON Placeholder SampleData
      </h1>
      <Tabs
        defaultValue={tabList[0].val}
        className="w-full flex flex-col justify-center items-center"
      >
        <TabsList>
          {tabList.map((e, i) => (
            <TabsTrigger value={e.val} key={i}>
              {e.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabList.map((e, i) => (
            <TabsContent value={e.val} key={i}>
              {e.content}
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}

export default App;
