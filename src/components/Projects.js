import React from 'react';
import clsx from 'clsx';
import styles from './Projects.module.css';

const FeatureList = [
  {
    title: 'Chrysalis',
    src: '../../static/img/projects/chrysalis.png',
    link: 'https://chrysalis.docs.iota.org',
    description: (
      <>
        Chrysalis is the newest network update (IOTA 1.5)
      </>
    ),
  },
  {
    title: 'Client Libraries',
    src: '../../static/img/projects/libraries.png',
    link: 'https://client-lib.docs.iota.org',
    description: (
      <>
        The Client Libraries can be used to easily interact with IOTA network (Tangle) via IOTA node software.
      </>
    ),
  },
  {
    title: 'Wallet Libraries',
    src: '../../static/img/projects/wallet.png',
    link: 'https://wallet-lib.docs.iota.org',
    description: (
      <>
       The Wallet Libraries can be used to easily integrate an IOTA Wallet into your applications.
      </>
    ),
  },
  {
    title: 'HORNET',
    src: '../../static/img/projects/hornet.png',
    link: 'https://hornet.docs.iota.org',
    description: (
      <>
        HORNET is a powerful, community driven IOTA node software written in Go.
      </>
    ),
  },
  {
    title: 'Bee',
    src: '../../static/img/projects/bee.png',
    link: 'https://bee.docs.iota.org',
    description: (
      <>
        A framework for building IOTA nodes, clients, and applications in Rust.
      </>
    ),
  },
  {
    title: 'Stronghold',
    src: '../../static/img/projects/stronghold.png',
    link: 'https://stronghold.docs.iota.org',
    description: (
      <>
        Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to protect any digital secret.
      </>
    ),
  },
];

function Feature({ src, title, description, link }) {
  return (

    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <img className={styles.featureImg} src={src} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
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
