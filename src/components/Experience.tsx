import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience-container">
      <div className="section-title">
        <h2>Professional Experience</h2>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Software Engineer II</h3>
            <div className="experience-company">ESRI, Redlands, CA, US</div>
          </div>
          <div className="experience-date">May 2024 – Present</div>
        </div>
        <div className="experience-description">
          {/* <p>Describe your role, responsibilities, and key achievements at this position.</p> */}
          <ul>
            <li>Architected a data pipeline that transforms unstructured item info and metadata into structured context JSON, which is used in a RESTful API engineered to generate item information suggestions, leveraging a GPT-4o powered AI skill. </li>
            <li>Designed a JSON schema to define custom object models for data classification. Implemented a standalone prototype leveraging React, TypeScript, and Node.js which is used for user testing and presented in ESRI user conference. </li>
            <li>Provided RESTful endpoints to validate, configure and remove classification object model on an organization’s data management portal using Windows or Linux ArcGIS enterprise application.</li>
            {/* <li>Led a team of 5 developers to build a scalable web application</li>
            <li>Implemented CI/CD pipeline, reducing deployment time by 40%</li>
            <li>Migrated the application to a microservices architecture</li>
            <li>Mentored junior developers and conducted code reviews</li> */}
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Software Engineer II</h3>
            <div className="experience-company">ClearTax, Bengaluru, India</div>
          </div>
          <div className="experience-date">Mar 2021 – Aug 2022</div>
        </div>
        <div className="experience-description">
          {/* <p>Describe your role, responsibilities, and key achievements at this position.</p> */}
          <ul>
            <li>Contributed to the design and development of an order management system to simplify bundled SAAS product license 
            purchases for enterprise users, utilizing Java Spring Boot, Hibernate, REST APIs, webhooks, and MySQL database. </li>
            <li>Integrated payment gateway system using webhooks to facilitate payments, cancellations and refunds on the orders. 
            Making sure 100% of the refunds are settled within 72 hours using scheduler jobs. </li>
            <li>Developed an event-driven microservice for Salesforce data synchronization using RabbitMQ, AWS Step Functions, and 
            RESTful APIs, boosting data accuracy by 60% and automating 90% of manual process.</li>
            <li>Collaboratively developed a user authentication system with SSO support, integrating client SAML and LDAP IdPs into a 
            Python Django application, and managed authentication callbacks through REST APIs.</li>
            {/* <li>Conducted performance testing on microservices using Locust to measure and optimize throughput and latency metrics.</li> */}
            <li>Performed load testing on RESTful microservices using Locust, optimizing throughput and latency metrics for enhanced performance.</li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Senior Software Engineer</h3>
            <div className="experience-company">Arcesium, Hyderabad, India</div>
          </div>
          <div className="experience-date">Apr 2019 – Mar 2021</div>
        </div>
        <div className="experience-description">
          {/* <p>Describe your role, responsibilities, and key achievements at this position.</p> */}
          <ul>
            <li>Spearheaded a PoC to transform a monolithic Java-based PNL system into an event-driven microservices architecture 
            using Spring Boot and ActiveMQ, ensuring zero data loss and achieving high-performance processing. </li>
            <li> Led a team to deliver a production-ready MVP within 3 months by establishing CI/CD pipelines with Docker and 
            Kubernetes, resulting in a scalable and fault-tolerant solution with daily production-level testing.</li>
            <li>Developed a custom ETL pipeline using Spring Batch and integrated Zookeeper for pessimistic locking to process 2 million 
            records per run while mitigating data race conditions in a distributed system.</li>
            <li>Developed operational features including scheduled cron jobs and pause/resume/kill controls for multi-step PNL jobs, 
            significantly reducing DevOps workload.</li>
            <li>Acted as a DevOps SME and actively participated in the on-call cycle, providing comprehensive root cause analyses (RCA) 
            for critical failures and incidents to ensure continuous improvement and system reliability.</li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Solution Integration Consultant I</h3>
            <div className="experience-company">FICO, Bengaluru, India</div>
          </div>
          <div className="experience-date">Jun 2017 – Mar 2019</div>
        </div>
        <div className="experience-description">
          {/* <p>Describe your role, responsibilities, and key achievements at this position.</p> */}
          <ul>
            <li>Optimized RDBMS schema and integrated secure SOAP APIs in a Java web application run on Apache Tomcat server.</li>
            <li>Scripted an audit log capability using JavaScript, leveraging change events to persist data changes to SQL database.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
