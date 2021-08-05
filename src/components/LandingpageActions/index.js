import clsx from 'clsx';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';

const Wiki = [
  {
    title: 'Community Wiki',
    src: require('../../../static/img/projects/wiki.png').default,
    link: 'https://github.com/iota-community/iota-wiki',
    description: (
      <>
        Everything you need to know about IOTA in one place.
      </>
    ),
  },
  
];

const Networks = [
  {
    title: 'Chrysalis',
    src: require('../../../static/img/projects/chrysalis.png').default,
    link: 'https://chrysalis.docs.iota.org',
    description: (
      <>
        Chrysalis is the newest network update (IOTA 1.5)
      </>
    ),
  },
];

const NodeSoftware = [
  {
    title: 'HORNET',
    src: require('../../../static/img/projects/hornet.png').default,
    link: 'https://hornet.docs.iota.org',
    description: (
      <>
        HORNET is a powerful, community driven IOTA node software written in Go.
      </>
    ),
  },
  {
    title: 'Bee',
    src: require('../../../static/img/projects/bee.png').default,
    link: 'https://bee.docs.iota.org',
    description: (
      <>
        A framework for building IOTA nodes, clients, and applications in Rust.
      </>
    ),
  },
];

const Libraries = [
  {
    title: 'Client Libraries',
    src: require('../../../static/img/projects/libraries.png').default,
    link: 'https://client-lib.docs.iota.org',
    description: (
      <>
        The Client Libraries can be used to easily interact with IOTA network (Tangle) via IOTA node software.
      </>
    ),
  },
  {
    title: 'Wallet Libraries',
    src: require('../../../static/img/projects/wallet.png').default,
    link: 'https://wallet-lib.docs.iota.org',
    description: (
      <>
       The Wallet Libraries can be used to easily integrate an IOTA Wallet into your applications.
      </>
    ),
  },
];

const Products = [
  {
    title: 'Stronghold',
    src: require('../../../static/img/projects/stronghold.png').default,
    link: 'https://stronghold.docs.iota.org',
    description: (
      <>
        Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to protect any digital secret.
      </>
    ),
  },
];


const ActionList = [
  {
    title: 'Community Wiki',
    src: require('../../../static/img/projects/wiki.png').default,
    link: 'https://github.com/iota-community/iota-wiki',
    description: (
      <>
        Everything you need to know about IOTA in one place.
      </>
    ),
  },
  {
    title: 'Chrysalis',
    src: require('../../../static/img/projects/chrysalis.png').default,
    link: 'https://chrysalis.docs.iota.org',
    description: (
      <>
        Chrysalis is the newest network update (IOTA 1.5)
      </>
    ),
  },
  {
    title: 'Client Libraries',
    src: require('../../../static/img/projects/libraries.png').default,
    link: 'https://client-lib.docs.iota.org',
    description: (
      <>
        The Client Libraries can be used to easily interact with IOTA network (Tangle) via IOTA node software.
      </>
    ),
  },
  {
    title: 'Wallet Libraries',
    src: require('../../../static/img/projects/wallet.png').default,
    link: 'https://wallet-lib.docs.iota.org',
    description: (
      <>
       The Wallet Libraries can be used to easily integrate an IOTA Wallet into your applications.
      </>
    ),
  },
  {
    title: 'HORNET',
    src: require('../../../static/img/projects/hornet.png').default,
    link: 'https://hornet.docs.iota.org',
    description: (
      <>
        HORNET is a powerful, community driven IOTA node software written in Go.
      </>
    ),
  },
  {
    title: 'Bee',
    src: require('../../../static/img/projects/bee.png').default,
    link: 'https://bee.docs.iota.org',
    description: (
      <>
        A framework for building IOTA nodes, clients, and applications in Rust.
      </>
    ),
  },
  {
    title: 'Stronghold',
    src: require('../../../static/img/projects/stronghold.png').default,
    link: 'https://stronghold.docs.iota.org',
    description: (
      <>
        Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to protect any digital secret.
      </>
    ),
  },
];

function Action({ title, src, link, description }) {
  let [hovering, setHovering] = useState(false);
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <div className='col col--4 margin-vert--md'>
      <div
        className={clsx('card padding--lg')}
        onClick={handleClick}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <div className="text--center">
          <img className={styles.featureImg} src={src} alt={title} />
        </div>
        <div className={clsx(styles.header)}>

          <span className={clsx(styles.headerTitle)}>{title}</span>
          <div href={link} className={clsx(styles.button)}>
            <span className={clsx("material-icons", styles.icon)}>
              navigate_next
            </span>
          </div>
        </div>
        <div className={clsx(
          "headline-stick",
          {
            "size-m": hovering,
            "size-s": !hovering
          }
        )}></div>
        <div className={clsx(styles.body)}>
          {description}
        </div>
      </div>
    </div>
  );
}

function LandingpageActions() {
  return (
    <div className='container padding--xl'>
      <div className="section-header grey text--center margin-bottom--sm" >The knowledge base</div>
      <div className='row action-wrapper'>
        {Wiki.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
      <div className="section-header grey text--center margin-bottom--sm margin-top--lg" >Networks</div>
      <div className='row action-wrapper'>
        {Networks.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
      <div className="section-header grey text--center margin-bottom--sm margin-top--lg" >Node Software</div>
      <div className='row action-wrapper'>
        {NodeSoftware.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
      <div className="section-header grey text--center margin-bottom--sm margin-top--lg" >Libraries</div>
      <div className='row action-wrapper'>
        {Libraries.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
      <div className="section-header grey text--center margin-bottom--sm margin-top--lg" >Products</div>
      <div className='row action-wrapper'>
        {Products.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default LandingpageActions