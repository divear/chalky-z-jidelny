import React from 'react';

function Info() {
    return <div>
        <title>Info </title>
        <h2 className='headerText'>Info</h2>
        <p className='info'>
            Vytvořeno Lukášem Odehnalem<br />
            LICENCE: GPL3 <br />
            Zdrojový kód: <a href="https://github.com/lukascobit/chalky-z-jidelny">https://github.com/lukascobit/chalky-z-jidelny</a>
        </p>
        <h2 className='headerText'>Pravidla</h2>
        <ol className='info'>
            <li>Zákaz spamu</li>
            <li>Zákaz posílání ničeho, co není jídlo</li>
            <li>Zákaz nelegálního obsahu (viz. pravidlo 2.)</li>
        </ol>

    </div>;
}

export default Info;
