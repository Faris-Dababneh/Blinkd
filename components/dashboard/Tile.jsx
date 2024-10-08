'use client'
// IMPROVE ANSWER MODAL APPEARANCE AND IMPLEMENT SAVE FEATURE FOR ANSWER CHANGING
import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@nextui-org/react';
import { Duration } from './questions/Duration';
import { Interests } from './questions/Interests';
import { Places } from './questions/Places';
import { Modal } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import LoadingOverlay from 'react-loading-overlay';

export const Tile = ({ answerName, answer, session, isLoading }) => {
  if (isLoading) {
    return (
      <LoadingOverlay spinner active={isLoading} text='Loading your answers...'>
        <div className='flex flex-col rounded-lg border w-64 h-64 p-10'>
          <h1 className='text-lg font-semibold underline uppercase'>DURATION</h1>
          <p>mm/dd/yyyy - mm/dd/yyyy</p>
          <Button className='mt-auto self-start w-full bg-primary text-white py-2 px-4 rounded-full' onPress={(event) => openAnswer(event)}>Change Answer</Button>
        </div>
      </LoadingOverlay>
    );
  }

  const [opened, handlers] = useDisclosure(false);
  const [selectedAnswer, setSelectedAnswer] = useState();
  console.log(answerName)
  const openAnswer = (event) => {
    switch (answerName) {
      case 'duration':
        setSelectedAnswer(<Duration />);
        handlers.open();
        break;
      case 'interests':
        setSelectedAnswer(<Interests />);
        handlers.open();
        break;
      case 'places':
        setSelectedAnswer(<Places />);
        handlers.open();
        break;
    }
  }

  return (
    <MantineProvider>
      <div className='flex flex-col rounded-lg border w-64 h-64 p-10 mr-10'>
        <h1 className='text-lg font-semibold underline uppercase'>{answerName}</h1>
        {answer.length > 1 ? (
          <div>
            {answer.map((item) => (
              <>{item !== answerName ? <p>{item}</p> : <p></p>}</>
            ))}
          </div>
        ) : (
          <></>
        )}
        <Button className='mt-auto self-start w-full bg-primary text-white py-2 px-4 rounded-full' onPress={(event) => openAnswer(event)}>Change Answer</Button>
        <Modal opened={opened} onClose={() => handlers.close()} centered size={'xl'}>
          {selectedAnswer}
        </Modal>

      </div>
    </MantineProvider>
  )
}
