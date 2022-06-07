import React from 'react'

const Dropdown = () => {
  return (
    <div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">

        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" id="menuLink1" className="pure-menu-link">More Info</a>
            <ul className="pure-menu-children">
                <li className="pure-menu-item">
                    <a href="https://cryptonews.com/" target="_blank" className="pure-menu-link">News</a>
                </li>
                <li className="pure-menu-item">
                    <a href="https://www.youtube.com/watch?v=1YyAzVmP9xQ&ab_channel=Simplilearn" target="_blank" className="pure-menu-link">Crypto?</a>
                </li>
                <li className="pure-menu-item">
                    <a href="https://twitter.com/search?q=%23CRYPTOCURRENCY" target="_blank" className="pure-menu-link">Twitter</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
  )
}

export default Dropdown