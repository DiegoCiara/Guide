import React from 'react';
import { CardContainer } from '../ui/components/Cards/Cards';
import { CodeSpace } from '../ui/components/CodeSpace';
import { Divisor } from '../ui/styles/Container';
import '/src/App.css'


export const PageContent = ({ content }) => {
  if (content.type === 'head') {
    return <h1>{content.title}</h1>;
  }

  if (content.type === 'title') {
    return <h2>{content.title}</h2>;
  }

  if (content.type === 'subtitle') {
    return <h3>{content.title}</h3>;
  }

  if (content.type === 'paragraph') {
    return <p>{content.paragraph}</p>;
  }

  if (content.type === 'card') {
    return <CardContainer title={content.title}  p={content.paragraph} code={content.code}/>;
  }

  if (content.type === 'code') {
    return <CodeSpace code={content.code}/>;
  }

  if (content.type === 'divisor') {
    return <Divisor/>;
  }
  
  return null;
};
