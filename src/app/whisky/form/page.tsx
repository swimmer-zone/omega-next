'use client';

import React, { JSX, useMemo, useState } from 'react';
import { Footer, Hexagons, Menu } from '../../../components';
import {
    countries,
    whiskyCaskType,
    whiskyFinish,
    whiskyFlavour,
    whiskyRegion,
    whiskyType
} from '../../../json';
import '../../_scss/_page.scss';
import '../../_scss/whisky-form.scss';

type Option = {
    value: string;
    label: string;
};

export default function WhiskyForm(): JSX.Element {
    const today = useMemo(() => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    }, []);

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [strength, setStrength] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState('');
    const [caskType, setCaskType] = useState('');
    const [dateOfTasting, setDateOfTasting] = useState(today);
    const [location, setLocation] = useState('');
    const [flavour, setFlavour] = useState<string[]>([]);
    const [finish, setFinish] = useState('');
    const [notes, setNotes] = useState('');
    const [rating] = useState(2.5);
    const [input, setInput] = useState('');

    const isRegionVisible = country === 'Scotland';

    const flavourString = flavour.join(', ');

    const handleCountryChange = (value: string) => {
        setCountry(value);

        if (value !== 'Scotland') {
            setRegion('');
        }
    };

    const handleFlavourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setFlavour(selectedValues);
    };

    const renderOptions = (options: Option[]) => {
        return options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));
    };

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formatted = `{
    "brand": "${brand}",
    "name": "${name}",
    "strength": "${strength}",
    "country": "${country}",
    "region": "${region}",
    "type": "${type}",
    "cask_type": "${caskType}",
    "date_of_tasting": "${dateOfTasting}",
    "location": "${location}",
    "flavour": "${flavourString}",
    "finish": "${finish}",
    "notes": "${notes}",
    "rating": "${rating}"
}`;

        console.log(formatted);
        setInput(formatted);
    };

    return (
        <main>
            <Menu active="whisky" />
            <Hexagons />

            <div className="content-column">
                <form onSubmit={submit}>
                    <h2>My Tasting</h2>

                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand / Distillery name"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        inputMode="numeric"
                        name="strength"
                        min="40"
                        max="100"
                        placeholder="Alcohol level in %"
                        value={strength}
                        onChange={(e) => setStrength(e.target.value)}
                    />

                    <select
                        name="country"
                        className="select"
                        value={country}
                        onChange={(e) => handleCountryChange(e.target.value)}
                    >
                        <option value="">Select country...</option>
                        {Object.values(countries.objects.countries).map((c) => (
                            typeof c === 'string' && (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            )
                        ))}
                    </select>

                    {isRegionVisible && (
                        <select
                            name="region"
                            className="select"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            <option value="">Select region...</option>
                            {renderOptions(whiskyRegion)}
                        </select>
                    )}

                    <select
                        name="type"
                        className="select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select type...</option>
                        {renderOptions(whiskyType)}
                    </select>

                    <ul>
                        <li>
                            See:{' '}
                            <a href="https://grimsdyke.com/whisky-types/" target="_blank" rel="noreferrer">
                                whisky types
                            </a>
                        </li>
                    </ul>

                    <select
                        name="cask_type"
                        className="select"
                        value={caskType}
                        onChange={(e) => setCaskType(e.target.value)}
                    >
                        <option value="">Select cask type...</option>
                        {renderOptions(whiskyCaskType)}
                    </select>

                    <h2>Tasting location and date</h2>

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <input
                        type="date"
                        name="date_of_tasting"
                        lang="nl-nl"
                        value={dateOfTasting}
                        onChange={(e) => setDateOfTasting(e.target.value)}
                    />

                    <h2>Opinions</h2>

                    <select
                        name="flavour"
                        className="select"
                        multiple
                        value={flavour}
                        onChange={handleFlavourChange}
                    >
                        {renderOptions(whiskyFlavour)}
                    </select>

                    <select
                        name="finish"
                        className="select"
                        value={finish}
                        onChange={(e) => setFinish(e.target.value)}
                    >
                        <option value="">Select finish...</option>
                        {renderOptions(whiskyFinish)}
                    </select>

                    <textarea
                        name="notes"
                        placeholder="Some notes..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    <div className="slider-label">{rating} stars</div>

                    <button type="submit">Copy JSON</button>
                </form>

                {/* <Code input={input} language="json" /> */}
                {input && <pre>{input}</pre>}
            </div>

            <Footer />
        </main>
    );
}