// 'use client' directive instructs React to render this component on the client side
'use client'

// Import React library for JSX and component-based structure
import React from 'react'

// Import components from NextUI for creating modals and buttons, 
// as well as the useDisclosure hook to manage modal state
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

// Define the NewsBox component which receives props: article (data object), expanded (boolean), 
// onExpand and onCollapse (functions to handle expanding/collapsing the article's details)
export const NewsBox = ({ article, expanded, onExpand, onCollapse }) => {
    
    // Destructuring values from useDisclosure hook for modal state management.
    // isOpen - Boolean that tracks if the modal is open or closed.
    // onOpen - Function that opens the modal.
    // onOpenChange - Callback function triggered when modal open/close state changes.
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // JSX layout: Main return block that structures the NewsBox UI.
    // A wrapper div is used here with utility classes for styling
    return (
        <div className="bg-white shadow-md rounded-lg p-4 transition-all">
            {/* Display the article image, using the imageUrl from the article prop. 
            Image is styled to cover the available space with full width and a fixed height (h-40).
            Adding alt text dynamically from article.headline helps improve accessibility. */}
            <img src={article.imageUrl} alt={article.headline} className="w-full h-40 object-cover rounded-lg mb-4" />
            
            {/* Display the article headline. Styled as a large, bold font to stand out as the main title */}
            <h2 className="text-xl font-semibold mb-1">{article.headline}</h2>
            
            {/* Display the publication date of the article in a readable format */}
            <p className='text-md mb-4'>Published: {article.publishedAt}</p>
            
            {/* Display the summary of the article. Summary is rendered within a paragraph for readability */}
            <p className='mb-4'>{article.summary}</p>
            
            {/* 'Read More' button that opens the modal to view additional content */}
            <Button onPress={onOpen} className='bg-primary'>Read More</Button>
            
            {/* Modal component for displaying detailed article content when the user clicks 'Read More' */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {/* Using a render prop pattern to handle modal close action
                    Function receives onClose, which closes the modal when invoked */}
                    {(onClose) => (
                        <>
                            {/* Modal Header: Displays the title of the modal. 
                            Ideally, it could be dynamic based on the article title for clarity */}
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            
                            {/* Modal Body: Displays the main content of the article */}
                            <ModalBody>
                                <p>
                                    {article.content}
                                </p>
                            </ModalBody>
                            
                            {/* Modal Footer: Provides action buttons for users to interact with.
                            Close button dismisses the modal; Action button could be customized based on app needs */}
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
Example article content for testing:
"A research team from the Ulsan National Institute of Science and Technology (UNIST) in South Korea has developed transparent solar cell technology capable of directly charging a..."

"Serving tech enthusiasts for over 25 years. TechSpot means tech analysis and advice you can trust
Why it matters: Scientists have been working on creating transparent solar cells for years, achieving various milestones that have brought the technology... [3282 chars]"
*/


// Great job on implementing this component! You're creating an experience that makes information 
// accessible, engaging, and easy to interact with, which is a big part of creating inclusive and 
// empowering technology. 
// Keep pushing forward – the attention to detail and care you’re showing 
// in your work here is exactly what contributes to impactful and meaningful user experiences. 
// Keep up the fantastic progress Faris!
// I'm proud!

