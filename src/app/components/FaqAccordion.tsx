'use client';
import React, { JSX, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface Faq {
  Question: string;
  Answer: string | JSX.Element;
}

const faqs: Faq[] = [
  {
    Question: 'What is Onfra?',
    Answer: 'Onfra is cloud software that works at official and residential reception desks to get the visitor details. It has sophisticated features like authenticating visitor via OTP, Face capture, document sign and much more.',
  },
  {
    Question: 'How Onfra works?',
    Answer: 'Visitor enters and see 3 options in the tablet screen namely. i.e New, Repeat, Invited. For new visitor entry, visitor enter the personal details and whom they wanna meet (notification will be received by the particular host), next the phone number will be verified by the OTP and finally face will be captured. If the company want the visitors to sign some documents they can also make that enabled. For repeat visitors just phone number will be required to reduce re-entering info again.',
  },
  {
    Question: 'How should I set up an Onfra account?',
    Answer: (
      <>
        <ul>
          <li>Signup</li>
          <li>Verify Account</li>
          <li>Admin details</li>
          <li>Set up business details And you are ready to go.</li>
        </ul>
        Just register your company and create an account name for company and get started by creating a branch, checkpoint and start registering your visitors for free. If you are using tablet for your reception desk / lobby you can download Onfra Pad in iOS / Android store.
      </>
    ),
  },
  {
    Question: 'What is Onfra Pad?',
    Answer: 'Onfra Pad is an App that can be downloaded from stores and installed in the Android Tablet or iPad. Before the device need to be configured in your Onfra account. Once your setup is done, your visitors can check in through the tablet and iPad.',
  },
  {
    Question: 'How your teams uses visitor information?',
    Answer: 'Once the visitor registers with the employee (host) they want meet, the employee will get notification about the visitor. Admin can also use all the visitor information for further uses like marketing, sales and HR.',
  },
  {
    Question: 'What is visitor invites?',
    Answer: 'Admin or Host can invite the visitors to meet a particular person in a time with their information. Onfra will send a ID which can be used while they enter your office. This minimizes the time and eases the steps for the visitors gives them a pleasing experience.',
  },
  {
    Question: 'What device or hardware do a company need to use Onfra?',
    Answer: 'If you are using notebook and pen, then you need a tablet to replace it and take your reception to next level. If you have a computer you can also use Onfra web app through browser at no cost. If you need to implement Onfra in tablet/iPad you need to invest in it, or else you are free to go, with 0 investment.',
  },
  {
    Question: 'Setting up the printer',
    Answer: 'Once you setup Onfra and want to print the badges for your visitors, then configure the printer as usual and setup the predefined badge size or you can use your own design. Badges helps your visitors to easily identified inside the office and make their experience better.',
  },
  {
    Question: 'What are the supported printers on Onfra?',
    Answer: (
      <>
        We support most printers in the market, However, not all printers support certain features or platforms. In this section we will answer questions about supported printers in our app. <a href="https://onfra.io/supported-printers/" style={{color:"var(--primary-green)"}}>Know More </a>
      </>
    ),
  },
  {
    Question: 'Security compliance of our company’s visitor data?',
    Answer: 'Your visitor data was keep at secured AWS and encrypted. Access to the database were secured other than the authorized accounts and your visitors also meant to see only the details about the employees they meet.',
  },
  {
    Question: 'Can we try Onfra as trail before purchasing it?',
    Answer: 'Yes you can use Onfra and all its limited features in trial period for free.',
  },
  {
    Question: 'What kind of customer support do we offer?',
    Answer: 'We provide in App chat window which you can ask us questions at anytime, and we will response as soon as possible. You can call our Onfra related queries at +91 9884-899-868 or you can write us to help@visitdesk.in.',
  },
  {
    Question: 'Do you have special pricing for non-profits?',
    Answer: (
      <>
        Yes, Onfra supports all non-profit organizations with a <strong>20% discount!</strong>
        The 20% discount is only applicable to your Onfra subscription and will not be applied for addons  (ex. SMS).
        Go to your support center and open a ticket with our billing team (Billing & pricing category) to confirm your non-profit status. In order for your request to be accepted, please attach a legal document showing your non-profit status.
        Note: the 20% non-profit discount is not applicable to <strong>Annual Subscriptions.</strong>
      </>
    ),
  },
];

const AccordionItem = ({ faq, isOpen, onClick }: { faq: Faq, isOpen: boolean, onClick: () => void }) => {
  return (
    <div style={{
      marginBottom: '20px',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      backgroundColor: 'var(--white)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}>
      <button
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div style={{
          marginRight: '15px',
          backgroundColor: 'var(--white)',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ChevronDownIcon style={{
            width: '16px',
            height: '16px',
            color: 'var(--primary-green)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }} />
        </div>
        <h5 style={{
          fontSize: 'var(--font-size-md)',
          fontWeight: 500,
          color: 'var(--text-dark)',
        }}>{faq.Question}</h5>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease-in-out',
        }}
      >
        <div style={{
          padding: '0 20px 20px 55px',
          color: 'var(--text-light)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height)',
        }}>
          {faq.Answer}
        </div>
      </div>
    </div>
  );
};

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{
      padding: '80px 0',
      backgroundColor: 'var(--background-light)',
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--primary-green)',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>FAQs</h2>
          <p style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginTop: '10px',
          }}>
            Here are some of the basic types of questions from our customers
          </p>
        </div>
        <div className="accordion">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
