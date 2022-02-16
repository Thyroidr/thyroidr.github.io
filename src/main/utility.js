import React from 'react';

export function Content(props) {
  return (
    <div className='lg:mx-64 md:mx-40 mx-10 mt-5 flex-auto flex-col text-center'>
      {props.children}
    </div>
  );
}

export function Paragraph(props) {
  return (
    <div className="text-slate-700 text-left py-2">
      {props.children}
    </div>
  );
}

export function InlineLink(props) {
  return (
    <span className="font-semibold underline decoration-teal-300/30 hover:decoration-teal-400/70 transition">
      {props.children}
    </span>
  )
}

export function Header(props) {
  return (
    <div className="text-3xl font-bold">
      {props.children}
    </div>
  );
}
