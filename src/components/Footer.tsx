import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-salmon/20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-16">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* Kolom Logo */}
          <div className="text-maroon flex items-center gap-2 font-bold text-xl tracking-tight">
            <svg className="h-8 w-8 text-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            GlucaDrop
          </div>

          {/* Kolom Konten */}
          <div className="mt-12 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-y-16">
              
              {/* Newsletter Top Block */}
              <div className="col-span-2">
                <div>
                  <h2 className="text-xl font-bold text-maroon">Dukung Riset Inovasi Kami</h2>
                  <p className="mt-4 text-dark/70 text-sm leading-relaxed">
                    Dapatkan pembaruan terkini tentang pengembangan terapi adjuvant dan hasil riset kami langsung di kotak masuk Anda.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only"> Email </label>
                  <div className="border border-salmon/30 bg-cream/30 p-1.5 focus-within:ring-2 focus-within:ring-maroon sm:flex sm:items-center sm:gap-2 rounded-xl transition-all">
                    <input type="email" id="UserEmail" placeholder="email_anda@gmail.com" className="w-full border-none bg-transparent focus:outline-none focus:border-transparent focus:ring-transparent sm:text-sm px-4 text-dark placeholder:text-dark/40" />
                    <button type="button" className="mt-1 w-full rounded-lg bg-maroon px-6 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-crimson sm:mt-0 sm:w-auto sm:shrink-0 shadow-md">
                      Berlangganan
                    </button>
                  </div>
                </form>
              </div>

              {/* Kolom Link 1 */}
              <div className="col-span-2 sm:col-span-1">
                <p className="font-bold text-maroon">Navigasi</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><Link href="/#kalkulator" className="text-dark/70 transition hover:text-maroon">Kalkulator Dosis</Link></li>
                  <li><Link href="/#keunggulan" className="text-dark/70 transition hover:text-maroon">Keunggulan Produk</Link></li>
                  <li><Link href="/#tentang" className="text-dark/70 transition hover:text-maroon">Latar Belakang</Link></li>
                </ul>
              </div>

              {/* Kolom Link 2 */}
              <div className="col-span-2 sm:col-span-1">
                <p className="font-bold text-maroon">Tim Peneliti</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-dark/70 transition hover:text-maroon">Faradillah Ermyne Sabil</a></li>
                  <li><a href="https://www.linkedin.com/in/abdullah-fakhrizal-57a1b1319/" target="_blank" rel="noopener noreferrer" className="text-dark/70 transition hover:text-maroon">Abdullah Fakhrizal</a></li>
                  <li><a href="#" className="text-dark/70 transition hover:text-maroon">Anggota Tiga</a></li>
                </ul>
              </div>

              {/* Kolom Link 3 */}
              <div className="col-span-2 sm:col-span-1">
                <p className="font-bold text-maroon">Afiliasi Riset</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><a href="https://www.unair.ac.id/" target="_blank" rel="noopener noreferrer" className="text-dark/70 transition hover:text-maroon">Universitas Airlangga</a></li>
                  <li><a href="https://unair.ac.id/fakultas-farmasi/" target="_blank" rel="noopener noreferrer" className="text-dark/70 transition hover:text-maroon">Fakultas Farmasi</a></li>
                  <li><a href="https://www.youtube.com/shorts/c2n_uj04I1I" target="_blank" rel="noopener noreferrer" className="text-dark/70 transition hover:text-maroon">Gedung Nanizar</a></li>
                </ul>
              </div>

              {/* Kolom Link 4 */}
              <div className="col-span-2 sm:col-span-1">
                <p className="font-bold text-maroon">Dokumen Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><Link href="#" className="text-dark/70 transition hover:text-maroon">Disclaimer Medis</Link></li>
                  <li><Link href="#" className="text-dark/70 transition hover:text-maroon">Hak Kekayaan Intelektual</Link></li>
                </ul>
              </div>

              {/* Kolom Link 5 */}
              <div className="col-span-2 sm:col-span-1">
                 <p className="font-bold text-maroon">Kontak Kami</p>
                 <ul className="mt-6 space-y-4 text-sm">
                   <li><a href="mailto:faradillah@gmail.com" className="text-dark/70 transition hover:text-maroon">faradillah@gmail.com</a></li>
                 </ul>
              </div>

              {/* Media Sosial Tim */}
              <ul className="col-span-2 flex flex-wrap justify-start gap-4 lg:col-span-5 lg:justify-end items-center mt-4 border-t border-salmon/20 pt-8 lg:mt-0 lg:border-0 lg:pt-0">
                <li className="text-sm font-semibold text-dark/50 mr-2 w-full lg:w-auto mb-2 lg:mb-0">Media Sosial Kami:</li>
                
                {/* Ikon 1: LinkedIn */}
                <li>
                  <a href="https://www.linkedin.com/in/faradillah-sabil-321ba8321?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="LinkedIn Tim">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>

                {/* Ikon 2: Instagram */}
                <li>
                  <a href="https://www.instagram.com/fremerylab/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="Instagram Tim">
                    <span className="sr-only">Instagram</span>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>

                {/* Ikon 3: Email Institusi */}
                <li>
                  <a href="mailto:faradillah.ermyne.sabil-2024@unair.ac.id" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon/70 transition hover:bg-maroon hover:text-white" title="Email Tim">
                    <span className="sr-only">Email</span>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* Copyright Bar Bawah */}
        <div className="mt-12 border-t border-salmon/20 pt-8">
          <div className="sm:flex sm:justify-between items-center">
            <p className="text-xs text-dark/50 font-medium">&copy; 2026 Tim Peneliti Inovasi Farmasi. Hak Cipta Dilindungi.</p>
            <p className="text-xs text-dark/40 mt-4 sm:mt-0 font-medium">Bukan merupakan saran medis profesional.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
