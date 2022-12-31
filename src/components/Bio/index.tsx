import styles from 'src/components/Bio/Bio.module.scss'

export default function Bio() {
  return (
    <div className={styles.bio}>
      <h2>Job</h2>

      <dl>
        <dt><a href="https://info.cookpad.com">Cookpad Inc.</a>(May 2009 - Current)</dt>
        <dd>Engineer, Manager</dd>
      </dl>

      <dl>
        <dt><a href="https://utagoe.com">Utagoe Inc.</a>(Apr 2006 - Apr 2009)</dt>
        <dd>Project manager</dd>
      </dl>

      <h2>Education</h2>

      <dl>
        <dt>M.S., <a href="https://www.waseda.jp">Waseda University</a>, Tokyo, Japan. (Apr 2004 - Mar 2006)</dt>
        <dd>Graduated with a Master&apos;s degree in Information and Computer Science</dd>
      </dl>

      <dl>
        <dt>B.S., <a href="https://www.waseda.jp">Waseda University</a>, Tokyo, Japan. (Apr 2000 - Mar 2004)</dt>
        <dd>Graduated with a Bachelor&apos;s degree in Information and Computer Science</dd>
      </dl>

      <h2>On the web services</h2>
      <ul>
        <li><a href="https://blog.katsuma.tv">Blog</a></li>
        <li><a href="https://twitter.com/ryo_katsuma">Twitter</a></li>
        <li><a href="https://github.com/katsuma">GitHub</a></li>
        <li><a href="https://facebook.com/katsuma">Facebook</a></li>
        <li><a href="https://speakerdeck.com/katsuma">Speaker Deck</a></li>
        <li><a href="https://linkedin.com/katsuma">LinkedIn</a></li>
        <li><a href="https://www.wantedly.com/id/ryo_katsuma">Wantedly</a></li>
        <li><a href="https://instagram.com/katsuma">Instagram</a></li>
        <li><a href="https://sumally.com/katsuma">Sumally</a></li>
      </ul>
    </div>
  );
}