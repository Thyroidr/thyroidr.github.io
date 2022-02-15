import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import pfp from '../resource/pfp.jpg';
import {
  Link
} from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useState } from 'react';

const pages = [
  { name: 'About', link: '/' },
  { name: 'Projects', link: 'projects' },
  { name: 'Awards', link: 'awards' },
];

function NavBar() {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    strategy: 'fixed',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [-35, 5],
        }
      }
    ],
  });

  return (
    <div className="bg-gray-200 py-4 flex h-14 drop-shadow-lg items-center width-screen fixed top-0 left-0 right-0 z-50">
      <img className="shrink-0 rounded-full ml-8 mr-2 h-10 w-10" src={pfp} alt="Profile picture"></img>
      <h1 className="ml-2 mr-4 text-xl font-bold text-black">Ryan Wang</h1>
      <div className="flex md:scale-100 scale-0 ml-10">
        {pages.map((page) => (
          <Link
            key={'page-' + page.name}
            to={page.link}
            className="mx-3 text-slate-700 text-lg hover:text-teal-600 transition"
          >
            {page.name}
          </Link>
        ))}
      </div>
      <Popover className="absolute md:scale-0 scale-100 right-0 px-2 py-2 mx-2 my-2">
        {({ open }) => (
          <>
            <Popover.Button 
              ref={setReferenceElement}
              className="px-2 py-2"
            >
              <FontAwesomeIcon 
                className={`${open ? 'transform rotate-90' : ''}`}
                icon={faBars}
              />
            </Popover.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className='bg-gray-100 py-1 drop-shadow-lg rounded-lg'
              >
                <div className='grid'>
                  {pages.map((page) => (
                    <Popover.Button as={Link}
                      key={'page-' + page.name}
                      to={page.link}
                      className='text-slate-700 px-8 py-1'
                    >
                      {page.name}
                    </Popover.Button>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default NavBar;