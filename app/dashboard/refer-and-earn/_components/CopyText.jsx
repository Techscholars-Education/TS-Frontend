import React, { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6';

const CopyText = ({ copyText }) => {


    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {

        copyTextToClipboard(copyText)
            .then(() => {

                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>

<div className='h-[3.6vw] w-[18vw] border-dotted border-blue-500 border-2 rounded-full bg-blue-200 flex items-center pl-2 '>
                                          
            <input type="text" value={copyText} readOnly className='bg-transparent font-sans text-[1.2vw] w-[11vw]' />
            <button onClick={handleCopyClick} className='text-blue-400 flex items-center gap-2'>
            <FaRegCopy/>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>


                                </div>

           
           
        </div>
    )
}

export default CopyText