'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
// import ReactSlider from 'react-slider';
import Head from 'next/head';
import { Code, Footer, Hexagons, Menu } from '../../Components';
import  {
    whisky_cask_type,
    whisky_country,
    whisky_finish,
    whisky_flavour,
    whisky_region,
    whisky_type
} from '../../json';
import '../_scss/_page.scss';
import '../_scss/whisky.scss';
import '../_scss/whisky-form.scss';

const Whisky = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const [ name, setName ] = useState('');
    const [ brand, setBrand ] = useState('');
    const [ strength, setStrength ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ isRegionVisible, setIsRegionVisible ] = useState(false);
    const [ region, setRegion ] = useState('');
    const [ type, setType ] = useState('');
    const [ caskType, setCaskType ] = useState('');
    const [ dateOfTasting, setDateOfTasting ] = useState(year + "-" + month + "-" + day);
    const [ location, setLocation ] = useState('');
    const [ flavour, setFlavour ] = useState('');
    const [ flavourString, setFlavourString ] = useState('');
    const [ finish, setFinish ] = useState('');
    const [ notes, setNotes ] = useState('');
    const [ rating, setRating ] = useState(2.5);
    const [ input, setInput ] = useState('');

    const handleBrandChange = (inputValue) => {
        setBrand(inputValue);
    }
    const handleNameChange = (inputValue) => {
        setName(inputValue);
    }
    const handleCreateCountry = (inputValue) => {
        setIsCountryLoading(true);
        setTimeout(() => {
            const newColor = createOption(inputValue);
            setIsLoading(false);
            setColorList((prev) => [...prev, newColor]);
            setValue(newColor);
        }, 1000);
    };
    const handleCountryChange = (input) => {
        if (input && input.value === 'Scotland') {
            setIsRegionVisible(true);
        } else {
            setIsRegionVisible(false);console.log(input)
        }
        setCountry(input);
    }
    const handleCreateFlavour = (inputValue) => {
        setIsFlavourLoading(true);
        setTimeout(() => {
            const newFlavour = createOption(inputValue);
            setIsLoading(false);
            setFlavourList((prev) => [...prev, newFlavour]);
            setValue(newFlavour);
        }, 1000);
    };
    const handleSetFlavour = (inputValue) => {
        let flavours = [];
        for (let i = 0; i < inputValue.length; i++) {
            flavours.push(inputValue[i].label);
        }
        const flavoursJoined = flavours.join(', ');
        setFlavour(inputValue);
        setFlavourString(flavoursJoined);
    };

    const submit = async (e) => {
        e.preventDefault();

        let jsonInput = {
            "brand": brand,
            "name": name,
            "strength": strength,
            "country": country.value,
            "region": region.value,
            "type": type.value,
            "cask_type": caskType.value,
            "date_of_tasting": dateOfTasting,
            "location": location,
            "flavour": flavour,
            "finish": finish,
            "notes": notes,
            "rating": rating
        };
        let formatted = `{
    "brand": "${brand}",
    "name": "${name}",
    "strength": "${strength}",
    "country": "${country.value}",
    "region": "${region.value}",
    "type": "${type.value}",
    "cask_type": "${caskType.value}",
    "date_of_tasting": "${dateOfTasting}",
    "location": "${location}",
    "flavour": "${flavourString}",
    "finish": "${finish}",
    "notes": "${notes}",
    "rating": "${rating}"
}`;
console.log(formatted)
        // setInput(JSON.stringify(jsonInput, null, 4));
        setInput(formatted);
    };

    return (<main>
        <Head>
            <title>Ω - Whisky</title>
        </Head>
        <Menu active="whisky"/>
        <Hexagons />
        <div className="content-column">
            <form onSubmit={submit}>
                <h1>Add Tasting</h1>
                <h2>The whisky</h2>
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand / Distillery name"
                    value={brand}
                    onChange={(e) => handleBrandChange(e.target.value)}/>
                <input
                    type="text"
                    name="name"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}/>
                <input
                    type="number"
                    inputMode="numeric"
                    name="strength"
                    min="40"
                    max="100"
                    placeholder="Alcohol level in %"
                    value={strength}
                    onChange={(e) => setStrength(e.target.value)}/>
                <CreatableSelect
                    name="country"
                    className="select"
                    placeholder="Select country..."
                    options={whisky_country}
                    value={country}
                    onChange={(newCountry) => handleCountryChange(newCountry)}
                    isClearable
                    onCreateOption={handleCreateCountry}/>
                {isRegionVisible &&
                <Select
                    name="region"
                    className="select"
                    placeholder="Select region..."
                    options={whisky_region}
                    value={region}
                    onChange={(option) => setRegion(option)}/>}

                <Select
                    name="type"
                    className="select"
                    placeholder="Select type..."
                    options={whisky_type}
                    value={type}
                    onChange={(option) => setType(option)}/>
                <ul>
                    <li>See: <a href="https://grimsdyke.com/whisky-types/" target="_blank">whisky types</a></li>
                </ul>
                <Select
                    name="cask_type"
                    className="select"
                    placeholder="Select cask type..."
                    options={whisky_cask_type}
                    value={caskType}
                    onChange={(option) => setCaskType(option)}/>

                <h2>Tasting location and date</h2>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
                <input
                    type="date"
                    name="date_of_tasting"
                    lang="nl-nl"
                    value={dateOfTasting}
                    onChange={(e) => setDateOfTasting(e.target.value)}/>

                <h2>Opinions</h2>
                <CreatableSelect
                    name="flavour"
                    className="select"
                    placeholder="Select flavours..."
                    options={whisky_flavour}
                    isClearable
                    isMulti
                    onChange={(newValue) => handleSetFlavour(newValue)}
                    onCreateOption={handleCreateFlavour}
                    value={flavour}/>
                <Select
                    name="finish"
                    className="select"
                    placeholder="Select finish..."
                    options={whisky_finish}
                    value={finish}
                    onChange={(option) => setFinish(option)}/>
                <textarea
                    name="notes"
                    placeholder="Some notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}/>

                {/*<ReactSlider*/}
                {/*    className="range-slider"*/}
                {/*    thumbClassName="slider-thumb"*/}
                {/*    trackClassName="slider-track"*/}
                {/*    defaultValue={rating}*/}
                {/*    min={1}*/}
                {/*    max={5}*/}
                {/*    step={0.5}*/}
                {/*    onChange={(value, index) => setRating(value)}/>*/}
                <div className="slider-label">{rating} stars</div>

                <button type="submit">Copy JSON</button>
            </form>
            <Code input={input} language="json" />
        </div>
        <Footer/>
    </main>);
}

export default Whisky;
