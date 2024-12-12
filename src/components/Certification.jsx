import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {certifications } from "../constants";

const CertificateCard = ({
  index,
  title,
  issuer,
  logo,
  driveLink,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <img
        src={logo}
        alt={`logo_of_${issuer}`}
        className='w-16 h-16 object-contain mb-4'
      />
      <p className='text-white font-medium text-[20px] tracking-wider'>
        {title}
      </p>
      <p className='mt-2 text-secondary text-[16px]'>
        Issued by <span className='text-white font-bold'>{issuer}</span>
      </p>
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className='mt-5 inline-block text-blue-500 underline text-[14px]'
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certification = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certificate, index) => (
          <CertificateCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");
