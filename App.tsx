import DrawerAppBar from './components/app-Bar/App-Bar';
import './App.css';
import ColorButtons from './components/button/button';
import IconLabelButtons from './components/icon-Button/Icon-Button';
import SelectSmall from './components/select/Select'
import SwitchLabels from './components/swich/Swich';
import BasicTable from './components/table/Table';
import CustomizedInputsStyleOverrides from './components/input/Iput';
function App() {

  return (
    <div className="App">
      <DrawerAppBar />
      <div style={{marginTop:"70px"}}>
        <ColorButtons label="send" setcolor={'secondary'} />
        <IconLabelButtons />
        <SwitchLabels />
        <SelectSmall data={["Adil", "Abid", "Ahmed"]} />
        <BasicTable col={[
          { heading: "Id" }
          , { heading: "Name" }
          , { heading: "RollNumber" }
          , { heading: "DOB" }
        ]} row={[
          {
            Id: "A-1",
            Name: "Adil",
            RollNumber: 420,
            DOB: "19-04-2002"
          },
          {
            Id: "A-2",
            Name: "Ahmes",
            RollNumber: 430,
            DOB: "18-06-2005"
          },
          {
            Id: "A-3",
            Name: "saad",
            RollNumber: 440,
            DOB: "19-04-2005"
          },
        ]} />
        <CustomizedInputsStyleOverrides />




      </div>
    </div>
  );
}

export default App;
