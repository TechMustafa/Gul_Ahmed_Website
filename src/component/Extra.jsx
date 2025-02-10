import React, { useEffect, useState } from 'react'
import SelectModal from './component/Model'
import './App.css'
import { Box, Tab, Tabs } from '@mui/material'
import axios from 'axios';
import { Header } from './component/Header';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0);
  const [data, setData] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setData(response?.data?.recipes.slice(0, 9));
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const setItemHandle = (item) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected?.some((selected) => selected.id === item.id)) {
        return prevSelected?.filter((selected) => selected.id !== item.id);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const handleSaveData = (value) => {
    const newData = selectedItems?.map((item) => {
      return {
        ...item,
        week: value
      }
    })
    setSelectedItems([...newData, ...selectedItems])
    setOpen(false)
  }

  return (
    <>
      <Header />

      <div className='bg-[#FAEBF6] h-auto px-4 md:px-[28vh] text-black'>
        <h2 className='text-[28px] font-bold py-4'>Week Order</h2>
      </div>

      <div>
        <Box className="flex font-bold items-center py-6 justify-center"
          sx={{ background: "white", borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="flex space-x-4">
            <Tab sx={{ marginRight: "12vh" }} label={<span className="font-bold text-[#003049]">All Meals</span>} {...a11yProps(0)} />
            <Tab sx={{ marginRight: "12vh" }} label={<span className="font-bold text-[#003049]">Week 1</span>} {...a11yProps(1)} />
            <Tab sx={{ marginRight: "12vh" }} label={<span className="font-bold text-[#003049]">Week 2</span>} {...a11yProps(2)} />
            <Tab sx={{ marginRight: "12vh" }} label={<span className="font-bold text-[#003049]">Week 3</span>} {...a11yProps(3)} />
            <Tab sx={{ marginRight: "12vh" }} label={<span className="font-bold text-[#003049]">Week 4</span>} {...a11yProps(4)} />
          </Tabs>
          <button onClick={() => setOpen(true)} className="ml-8 bg-[#004370] text-white font-bold py-2 px-6 rounded">
            Add More Weeks
          </button>
        </Box>

        {/* <CustomTabPanel value={value} index={0}>All Meals</CustomTabPanel>
        <CustomTabPanel value={value} index={1}>Week 1</CustomTabPanel>
        <CustomTabPanel value={value} index={2}>Week 2</CustomTabPanel>
        <CustomTabPanel value={value} index={3}>Week 3</CustomTabPanel>
        <CustomTabPanel value={value} index={4}>Week 4</CustomTabPanel> */}

        {/* <SelectModal closeModal={() => setOpen(!open)} isOpen={open} /> */}
      </div>

      <div className='flex justify-center items-center bg-[#FAEBF6]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 mt-10'>
          {data && data?.map((item, index) => {
            const isSelected = selectedItems.some((selected) => selected.id === item.id);
            const isCheck = value == 0 || selectedItems.some((selected) => selected.id === item.id && selected.week === value);
            return (
              isCheck && (<div onClick={() => setItemHandle(item)} className={`bg-white text-black px-[25px] w-[46vh] h-[64vh] rounded-[5px] cursor-pointer 
                ${isSelected ? "border-2 border-[#003049]" : ""}`}>
                <img className='h-[28vh] w-[100%] mx-auto mt-7 rounded-[5px]' src={item?.image} alt="" />
                <h4 className='text-[20px] font-bold mt-4'>{item?.title || 'Classic Margherita Pizza'}</h4>
                <p className='text-[10px] text-[#2f3e46] mt-2'> The ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  in the 1960s with the release of Letraset sheets containing It was popularised in the 1960s with the release of Letraset  was popularised in the 1960s with the release of Letraset sheets containing </p>
                <div className='text-[12px] flex justify-between mt-4'>
                  <div>
                    <h5><span className="font-bold">Cuisins: </span>{item?.cuisine || 'Italian'}</h5>
                  </div>
                  <div>
                    <h5><span className="font-bold">Rating: </span>{item?.rating || 0}
                      <span className='text-blue ml-1'>
                        {Array.from({ length: Math.round(item?.rating) }).map((_, index) => (
                          <span key={index}>⭐</span>
                        ))}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>)
            )
          })}
        </div>
      </div>
~
      <SelectModal save={(value) => handleSaveData(value)} closeModal={() => setOpen(!open)} isOpen={open} />
    </>

  )
}

export default App
