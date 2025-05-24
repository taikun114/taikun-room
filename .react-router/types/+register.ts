import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }

  interface Future {
    unstable_middleware: false
  }
}

type Params = {
  "/": {};
  "/2022/01/homebridge-bring-homekit-support-to-any-smart-devices.html": {};
  "/2021/11/oclp-with-big-sur-and-monterey-bugs-and-how-to-fix.html": {};
  "/2021/08/how-to-install-macos-big-sur-on-unsupported-mac.html": {};
  "/2022/10/how-to-install-macos-ventura-on-unsupported-mac.html": {};
  "/2024/09/how-to-install-macos-sequoia-on-unsupported-mac.html": {};
  "/2023/10/how-to-install-macos-sonoma-on-unsupported-mac.html": {};
  "/2024/11/how-to-update-firmware-using-terminal-command.html": {};
  "/2022/08/how-to-install-home-assistant-on-virtualbox.html": {};
  "/2022/09/cpu-gpu-temp-check-from-menu-bar-vitalsigns.html": {};
  "/2022/10/macos-ventura-with-oclp-bugs-and-how-to-fix.html": {};
  "/2024/09/macos-sequoia-with-oclp-bugs-and-how-to-fix.html": {};
  "/2023/10/macos-sonoma-with-oclp-bugs-and-how-to-fix.html": {};
  "/2022/08/how-to-use-dolby-surround-decorder-on-mac.html": {};
  "/2020/05/minecraft-je-how-to-make-infinity-carpet.html": {};
  "/2022/06/how-to-adjust-yamaha-avr-volume-from-mac.html": {};
  "/2020/11/macos11-how-to-fix-time-machine-backup.html": {};
  "/2020/06/easeus-data-recovery-wizard-for-mac.html": {};
  "/2022/03/nanoleaf-essentials-a19-bulb-review.html": {};
  "/2019/12/how-to-make-bootable-usb-installer.html": {};
  "/2021/07/latest-free-benchmark-app-for-mac.html": {};
  "/2021/10/history-of-iphone-and-differences.html": {};
  "/2021/11/used-mac-how-to-choice-guide-2022.html": {};
  "/2022/12/tenorshare-duplicate-file-deleter.html": {};
  "/2020/01/minecraft-useful-inventory-tips.html": {};
  "/2020/03/catalina-patcher-japanese-input.html": {};
  "/2022/11/how-to-download-macos-installer.html": {};
  "/2021/07/how-to-fix-crossfade-on-music.html": {};
  "/2020/07/catalina-patcher-with-no-usb.html": {};
  "/2021/07/can-big-tv-use-as-pc-display.html": {};
  "/2022/07/the-apple-store-time-machine.html": {};
  "/2020/01/nvidia-gpu-mac-pro-mojave.html": {};
  "/2020/02/mac-pro-mid-2012-repair-1.html": {};
  "/2020/03/mac-pro-mid-2012-repair-2.html": {};
  "/2019/12/mac-software-amphetamine.html": {};
  "/2020/11/how-to-download-catalina.html": {};
  "/2022/10/how-to-download-monterey.html": {};
  "/2021/12/how-to-download-big-sur.html": {};
  "/2022/05/tcl-43p8b-pros-and-cons.html": {};
  "/2023/09/how-to-download-ventura.html": {};
  "/2019/12/how-to-download-mojave.html": {};
  "/2019/12/mac-benchmark-software.html": {};
  "/2020/01/mac-karabiner-elements.html": {};
  "/2021/05/airtag-camera-hot-shoe.html": {};
  "/2021/12/flexclip-pros-and-cons.html": {};
  "/2022/02/best-web-browser-brave.html": {};
  "/2020/01/catalina-patcher-bugs.html": {};
  "/2020/11/macbook-air-m1-2020-1.html": {};
  "/2021/03/macbook-air-m1-2020-2.html": {};
  "/2019/12/mac-macs-fan-control.html": {};
  "/2019/12/mac-mediacenter-kodi.html": {};
  "/2020/03/cheap-usb-microphone.html": {};
  "/2020/05/mac-safari-to-chrome.html": {};
  "/2019/12/how-to-buy-used-mac.html": {};
  "/2019/12/internet-speed-test.html": {};
  "/2020/03/android-on-iphone-7.html": {};
  "/2020/04/imac-2011-junk-os-1.html": {};
  "/2020/04/imac-2011-junk-os-2.html": {};
  "/2019/12/mac-software-lunar.html": {};
  "/2019/12/mac-the-unarchiver.html": {};
  "/2020/02/mac-pro-change-gpu.html": {};
  "/2020/03/mac-pro-gpu-rx-570.html": {};
  "/2022/04/mac-software-eqmac.html": {};
  "/2020/01/mbp-2008-catalina.html": {};
  "/2019/12/apple-mactracker.html": {};
  "/2020/01/macbook-keyboard.html": {};
  "/2020/09/mac-software-mos.html": {};
  "/2019/12/macbook-junk-1.html": {};
  "/2019/12/macbook-junk-2.html": {};
  "/2019/12/macbook-junk-3.html": {};
  "/2020/01/macbook-junk-4.html": {};
  "/2020/01/macbook-junk-5.html": {};
  "/2020/08/2x-junk-mbp1-2.html": {};
  "/2020/09/2x-junk-mbp2-1.html": {};
  "/2020/01/mac-junk-2020.html": {};
  "/2020/08/2x-junk-mbp-1.html": {};
  "/2021/05/airtag-review.html": {};
  "/2019/12/mac-geektool.html": {};
  "/2019/12/mac-teleport.html": {};
  "/2020/01/mbp-2008-os.html": {};
  "/2020/02/mba-2009-os.html": {};
  "/2020/08/imac-2020-1.html": {};
  "/2020/08/imac-2020-2.html": {};
  "/2020/02/mb-2008-os.html": {};
  "/p/blog-page_11.html": {};
  "/p/blog-page.html": {};
  "/sitemap.xml": {};
  "/blog/:slug": {
    "slug": string;
  };
  "/p/p.html": {};
  "/page/:slug": {
    "slug": string;
  };
  "/robots.txt": {};
  "/_image/*": {
    "*": string;
  };
  "/*": {
    "*": string;
  };
};