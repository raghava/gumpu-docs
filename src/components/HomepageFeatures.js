import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_Hiking_re_k0bc.svg').default,
    description: (
      <>
        Gumpu is a free, customizable membership platform and communication tool - designed with orgnizations in mind. 
      </>
    ),
  },
  {
    title: 'Members & Contacts',
    Svg: require('../../static/img/undraw_subscriptions_re_k7jj.svg').default,
    description: (
      <>
        Define memberships, Onboard members, invite over an email, renew and extend memberships, collect payments, issue membership cards.
      </>
    ),
  },
  {
    title: 'Events & Campaigns',
    Svg: require('../../static/img/undraw_content_team_3epn.svg').default,
    description: (
      <>
        Organize events and gatherings, send RSVPs, communicate with participants, define and collect payments, issue and track tickets.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
