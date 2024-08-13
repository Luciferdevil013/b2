import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './index.css';

function Details({ isColor }){
    const partDetails = {
        Default:'',
        Cockpit:"The B-2 Spirit bomber's cockpit is designed for stealth operations, featuring advanced avionics, multi-function displays, and digital fly-by-wire controls. It has two seats for the pilot and co-pilot, with minimalistic instrumentation to reduce radar cross-section. The cockpit includes night vision compatibility, and displays are optimized for low-light conditions.",
        Wings:" The B-2 Spirit's wings are highly distinctive with a flying wing design, giving it a low radar profile and exceptional aerodynamic efficiency. Spanning 172 feet, the wings are thin and swept back, with no vertical tail surfaces, which reduces radar visibility. They house four General Electric F118 engines, embedded within the wing structure to minimize infrared and acoustic signatures. The wings also incorporate advanced composite materials and stealth coatings, further enhancing the bomber's stealth capabilities. The design allows for long-range flight with significant payload capacity, making the B-2 highly effective in strategic bombing missions. ",
        Engine:"The B-2 Spirit is powered by four General Electric F118-GE-100 engines. These engines are designed for stealth, featuring low observable characteristics with their high bypass ratio, which reduces infrared and acoustic signatures. They are mounted within the wing structure to conceal their exhaust and minimize radar cross-section. The engines provide a maximum thrust of about 17,300 pounds each, enabling the B-2 to achieve speeds over Mach 0.95 and long-range missions with a maximum combat radius of over 6,000 miles. The F118 engines are equipped with advanced noise reduction technology, contributing to the bomber's overall stealth performance.",
        Bomb:"The B-2 Spirit features two large internal bomb bays located in the center fuselage. Each bay can accommodate a variety of munitions, including nuclear and conventional bombs. The bays are designed to maintain the bomber's stealth profile by keeping ordnance hidden and minimizing radar cross-section. The B-2 can carry up to 40,000 pounds of munitions, including precision-guided bombs and cruise missiles. The internal bays are equipped with advanced handling systems to ensure accurate deployment and efficient storage of different types of ordnance. The stealthy design of these bays is crucial for maintaining the bomber's low observability during missions.",
        LandingGear:"The B-2 Spirit's landing gear consists of four main gear assemblies and a tailwheel, all designed to support the bomber's weight and ensure stability during landing and takeoff. Each main gear assembly features dual wheels for added weight distribution and shock absorption. The main gear is retractable and stows into the fuselage, preserving the aircraft's stealth profile. The tailwheel, which helps support the aircraft's rear during ground operations, is also retractable. The landing gear system incorporates advanced materials and design features to handle the B-2's unique aerodynamic and weight characteristics while maintaining stealth and operational effectiveness.",
    }
    return (
        <>
        <div className="details-conatiner">
            <h1 className="part-tittle">
                {isColor === 'Default' ? '' : isColor}
            </h1>
            <p className="part-details">
                {partDetails[isColor]}
            </p>
        </div>
        </>
    )
}

export default Details;