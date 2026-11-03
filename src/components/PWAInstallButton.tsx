import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';
import { Smartphone, Download, Share2, X, Check, ArrowRight } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'header' | 'mobile-nav' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running in standalone mode, hide button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 4000);
      }
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      {variant === 'header' && (
        <button
          onClick={handleInstallClick}
          title="Install FocusMe App on your device"
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
        >
          {isInstallable ? (
            <Download className="w-3.5 h-3.5 text-neutral-700" />
          ) : isIOS ? (
            <Share2 className="w-3.5 h-3.5 text-neutral-700" />
          ) : (
            <Smartphone className="w-3.5 h-3.5 text-neutral-700" />
          )}
          <span>Install App</span>
        </button>
      )}

      {variant === 'mobile-nav' && (
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-800 bg-neutral-200/80 rounded-md whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>
      )}

      {/* Installation Guide Modal (for iOS Safari and unsupported browsers) */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-neutral-200 text-neutral-900">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-bold text-xs">
                  FM
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Install FocusMe</h3>
                  <p className="text-xs text-neutral-500">Progressive Web App (PWA)</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              {isIOS ? (
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="font-semibold text-neutral-900 block mb-1">
                      📱 On iPhone or iPad (Safari):
                    </span>
                    <ol className="list-decimal list-inside space-y-1.5 text-neutral-600 leading-relaxed">
                      <li>
                        Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-0.5 text-neutral-800" /> in Safari's bottom toolbar.
                      </li>
                      <li>
                        Scroll down and tap <strong>Add to Home Screen</strong>.
                      </li>
                      <li>
                        Tap <strong>Add</strong> in the top-right corner.
                      </li>
                    </ol>
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    FocusMe will be added to your home screen with its custom icon and run in standalone mode without browser bars.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="font-semibold text-neutral-900 block mb-1">
                      🤖 On Android (Chrome / Edge / Samsung):
                    </span>
                    <ol className="list-decimal list-inside space-y-1.5 text-neutral-600 leading-relaxed">
                      <li>
                        Tap the browser menu <strong>(⋮)</strong> in the top-right corner.
                      </li>
                      <li>
                        Tap <strong>Install App</strong> or <strong>Add to Home Screen</strong>.
                      </li>
                      <li>
                        Confirm <strong>Install</strong>.
                      </li>
                    </ol>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="font-semibold text-neutral-900 block mb-1">
                      💻 On Desktop (Chrome / Edge / Brave):
                    </span>
                    <p className="text-neutral-600">
                      Look for the <strong>Install</strong> icon on the right side of your browser URL bar, or click the browser menu &gt; <strong>Save and share</strong> &gt; <strong>Install FocusMe</strong>.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowGuide(false)}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs rounded-lg transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success banner */}
      {installSuccess && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white text-xs font-medium rounded-lg shadow-lg">
          <Check className="w-4 h-4" />
          <span>FocusMe installed successfully!</span>
        </div>
      )}
    </>
  );
};
