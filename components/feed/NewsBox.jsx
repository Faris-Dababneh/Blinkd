'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export const NewsBox = ({article, expanded, onExpand, onCollapse}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="bg-white shadow-md rounded-lg p-4 transition-all">
            <img src={article.imageUrl} alt={article.headline} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mb-1">{article.headline}</h2>
            <p className='text-md mb-4'>Published: {article.publishedAt}</p>
            <p className='mb-4'>{article.summary}</p>
            <Button onPress={onOpen} className='bg-primary'>Read More</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <p> 
                            {article.content}
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
"A research team from the Ulsan National Institute of Science and Technology (UNIST) in South Korea has developed transparent solar cell technology capable of directly charging a..."

"Serving tech enthusiasts for over 25 years.TechSpot means tech analysis and advice you can trust
Why it matters: Scientists have been working on creating transparent solar cells for years, achieving various milestones that have brought the technology... [3282 chars]"

*/