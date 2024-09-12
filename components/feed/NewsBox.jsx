'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export const NewsBox = ({article, expanded, onExpand, onCollapse}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="bg-white shadow-md rounded-lg p-4 transition-all">
            <img src={article.imageUrl} alt={article.headline} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{article.headline}</h2>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                            Action
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

/*
{expanded ? (
        <>
          <p className="mt-4 text-gray-600">{article.content}</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onCollapse}
          >
            Collapse
          </button>
        </>
      ) : (
        <>
          <p className="mt-2 text-gray-500">{article.summary}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onExpand}
          >
            Expand
          </button>
        </>
      )}

*/