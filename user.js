//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 142                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

user_pref("gfx.webrender.all", true); // enables WR + additional features
user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
user_pref("gfx.webrender.compositor.force-enabled", true); // enforce
user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", true);
user_pref("browser.cache.disk.capacity", 2048000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache

user_pref("browser.cache.disk.metadata_memory_limit", 500); // default=250 (0.25 MB); limit of recent metadata we keep in memory for faster access

user_pref("browser.cache.jsbc_compression_level", 3);

/** MEMORY CACHE ***/
user_pref("browser.cache.memory.max_entry_size", 10240); // (10 MB); default=5120 (5 MB)

user_pref("browser.sessionhistory.max_total_viewers", 8);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

user_pref("media.memory_caches_combined_limit_kb", 1048576); // DEFAULT; alt=1048576
user_pref("media.memory_caches_combined_limit_pc_sysmem", 10); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 65536); // default=16384; alt=65536; chunk size for calls to the image decoders

user_pref("image.cache.size", 10485760); // DEFAULT; in MiB; alt=10485760 (cache images up to 10MiB in size)

/** NETWORK ***/
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
user_pref("network.http.pacing.requests.enabled", true); // DEFAULT
user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
user_pref("network.http.pacing.requests.burst", 14); // default=10
user_pref("network.dnsCacheEntries", 1000); // default=400
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
user_pref("network.dnsCacheExpirationGracePeriod", 240); // default=60; cache DNS entries for 4 minutes after they expire
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 20);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("browser.places.speculativeConnect.enabled", true);
user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);
user_pref("network.early-hints.preconnect.max_connections", 0); // default=10
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.max-resources-per-entry", 250); // default=100
user_pref("network.predictor.max-uri-length", 1000); // default=500
user_pref("dom.prefetch_dns_for_anchor_http_document", true); // [FF128+]
user_pref("dom.prefetch_dns_for_anchor_https_document", true);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);

user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.schemeful", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);

user_pref("security.cert_pinning.enforcement_level", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** FINGERPRINT PROTECTION (RFP) ***/
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.urlbar.showSearchTerms.enabled", true);
user_pref("browser.urlbar.showSearchTerms.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.groupLabels.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.search.separatePrivateDefault.urlbarResult.enabled", true); // HIDDEN

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true); // Normal + Private Browsing windows
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** DNS-over-HTTPS ***/
user_pref("network.trr.mode", 5); // Off (handled by PiHole)

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", true);
user_pref("signon.privateBrowsingCapture.enabled", true);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
user_pref("signon.generation.enabled", false);

user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.firefoxRelay.feature", "disabled");

/** ADDRESS + CREDIT CARD MANAGER ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

user_pref("network.http.referer.defaultPolicy.trackers", 1);
user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 1);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

user_pref("privacy.userContext.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 0);
user_pref("geo.provider.network.logging.enabled", true);
user_pref("browser.search.update", true);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", true);
user_pref("datareporting.healthreport.uploadEnabled", true);
user_pref("toolkit.telemetry.unified", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", true);
user_pref("toolkit.telemetry.newProfilePing.enabled", true);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", true);
user_pref("toolkit.telemetry.updatePing.enabled", true);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", true);
user_pref("toolkit.telemetry.coverage.opt-out", false);
user_pref("toolkit.coverage.opt-out", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("browser.tabs.crashReporting.sendReport", true);

/** DETECTION ***/
user_pref("network.captive-portal-service.enabled", true);
user_pref("network.connectivity-service.enabled", true);

user_pref("extensions.webextensions.restrictedDomains", ""); // remove Mozilla domains so adblocker works on pages

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("layout.css.prefers-color-scheme.content-override", 2);

/** AI ***/
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 3000);

/** FONT APPEARANCE ***/
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
user_pref("gfx.use_text_smoothing_setting", true);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.clipboard", true);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.engines", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.quickactions.enabled", true);
user_pref("browser.urlbar.shortcuts.quickactions", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.recentsearches.featureGate", true);
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

user_pref("pdfjs.sidebarViewOnLoad", 2);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// Adobe Creative Cloud in Microsoft Office
user_pref("security.enterprise_roots.enabled", true);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
user_pref("browser.tabs.tabMinWidth", 90);

user_pref("browser.cache.memory.capacity", 256000);
user_pref("browser.urlbar.ctrlCanonizesURLs", false);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

///  NATURAL SMOOTH SCROLLING V4 "SHARP" - AveYo, 2020-2022             preset     [default]
///  copy into firefox/librewolf profile as user.js, add to existing, or set in about:config
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   200);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "2.0");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);//NSS   [2000]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]

/// adjust multiply factor for mousewheel - or set to false if scrolling is way too fast
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);//NSS    [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);//NSS    [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);//NSS   [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);//NSS   [true]

/// adjust pixels at a time count for mousewheel - cant do more than a page at once if <100
user_pref("mousewheel.default.delta_multiplier_x",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_y",                       100);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);//NSS    [100]

///  this preset will reset couple extra variables for consistency
user_pref("apz.allow_zooming",                                          true);//NSS   [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);//NSS  [false]
user_pref("apz.paint_skipping.enabled",                                 true);//NSS   [true]
user_pref("apz.windows.use_direct_manipulation",                        true);//NSS   [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",           false);//NSS  [false]
user_pref("general.smoothScroll.durationToIntervalRatio",                200);//NSS    [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.lines.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",               150);//NSS    [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               200);//NSS    [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                50);//NSS     [50]
user_pref("layers.async-pan-zoom.enabled",                              true);//NSS   [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");//NSS    [250]
user_pref("mousewheel.transaction.timeout",                             1500);//NSS   [1500]
user_pref("mousewheel.acceleration.factor",                               10);//NSS     [10]
user_pref("mousewheel.acceleration.start",                                -1);//NSS     [-1]
user_pref("mousewheel.min_line_scroll_amount",                             5);//NSS      [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);//NSS      [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);//NSS      [3]

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

/****************************************************************************
 * SECTION: Lepton                                                          *
****************************************************************************/
// ** Theme Default Options ****************************************************
// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref("userChrome.tab.connect_to_window", true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar", true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding", true); // Original
user_pref("userChrome.tab.photon_like_padding", false); // Photon

user_pref("userChrome.tab.dynamic_separator", true); // Original, Proton
user_pref("userChrome.tab.static_separator", false); // Photon
user_pref("userChrome.tab.static_separator.selected_accent", false); // Just option
user_pref("userChrome.tab.bar_separator", false); // Just option

user_pref("userChrome.tab.newtab_button_like_tab", false); // Original
user_pref("userChrome.tab.newtab_button_smaller", true); // Photon
user_pref("userChrome.tab.newtab_button_proton", false); // Proton

user_pref("userChrome.icon.panel_full", true); // Original, Proton
user_pref("userChrome.icon.panel_photon", false); // Photon

// Original Only
user_pref("userChrome.tab.box_shadow", true);
user_pref("userChrome.tab.bottom_rounded_corner", true);

// Photon Only
user_pref("userChrome.tab.photon_like_contextline", true);
user_pref("userChrome.rounding.square_tab", false);

// == Theme Custom Settings ====================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.theme.private", true);
user_pref("userChrome.theme.proton_color.dark_blue_accent", true);

user_pref("userChrome.decoration.panel_button_separator", true);
user_pref("userChrome.decoration.panel_arrow", true);

user_pref("userChrome.padding.drag_space", true);

user_pref("userChrome.autohide.forward_button", true);
user_pref("userChrome.autohide.page_action", true);

user_pref("userChrome.autohide.toolbar_overlap", true);
user_pref("userChrome.autohide.bookmarkbar", true);

user_pref("userChrome.padding.toolbar_button.compact", true);
user_pref("userChrome.padding.menu_compact", true);
user_pref("userChrome.padding.bookmark_menu.compact", true);

user_pref("userChrome.urlbar.iconbox_with_separator", true);

user_pref("userChrome.urlView.full_width_padding", true);
user_pref("userChrome.urlView.always_show_page_actions", true);
user_pref("userChrome.urlView.focus_item_border", true);

user_pref("userChrome.tab.bottom_rounded_corner.all", true);
user_pref("userChrome.tab.always_show_tab_icon", true);

user_pref("userChrome.icon.account_image_to_right", true);
user_pref("userChrome.icon.menu.full", true);
user_pref("userChrome.icon.global_menu.mac", true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.page.proton_color.system_accent", true);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme", true);
user_pref("userChrome.compatibility.os", true);

user_pref("userChrome.theme.built_in_contrast", true);
user_pref("userChrome.theme.system_default", true);
user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true); // Need proton_color
user_pref("userChrome.theme.fully_color", true); // Need proton_color
user_pref("userChrome.theme.fully_dark", true); // Need proton_color

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);

user_pref("userChrome.padding.tabbar_width", false);
user_pref("userChrome.padding.tabbar_height", false);
user_pref("userChrome.padding.toolbar_button", true);
user_pref("userChrome.padding.navbar_width", true);
user_pref("userChrome.padding.urlbar", true);
user_pref("userChrome.padding.bookmarkbar", false);
user_pref("userChrome.padding.infobar", false);
user_pref("userChrome.padding.menu", true);
user_pref("userChrome.padding.bookmark_menu", false);
user_pref("userChrome.padding.global_menubar", true);
user_pref("userChrome.padding.panel", true);
user_pref("userChrome.padding.popup_panel", true);

user_pref("userChrome.tab.multi_selected", true);
user_pref("userChrome.tab.unloaded", true);
user_pref("userChrome.tab.letters_cleary", true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label", true);
user_pref("userChrome.tab.sound_with_favicons", true);
user_pref("userChrome.tab.pip", true);
user_pref("userChrome.tab.container", true);
user_pref("userChrome.tab.crashed", true);

user_pref("userChrome.fullscreen.overlap", true);
user_pref("userChrome.fullscreen.show_bookmarkbar", true);

user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.panel", true);
user_pref("userChrome.icon.menu", true);
user_pref("userChrome.icon.context_menu", true);
user_pref("userChrome.icon.global_menu", true);
user_pref("userChrome.icon.global_menubar", true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui", true);
user_pref("userContent.player.icon", true);
user_pref("userContent.player.noaudio", true);
user_pref("userContent.player.size", true);
user_pref("userContent.player.click_to_play", true);
user_pref("userContent.player.animate", true);

user_pref("userContent.newTab.full_icon", false);
user_pref("userContent.newTab.animate", true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar", true);

user_pref("userContent.page.field_border", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true); // Need proton_color
user_pref("userContent.page.proton", true); // Need proton_color
